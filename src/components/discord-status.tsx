"use client";

import { useState, useEffect, useRef } from "react";
import { FaDiscord, FaSpotify, FaCode } from "react-icons/fa";
import { MousePointer2, Monitor, Clock } from "lucide-react";
import Image from "next/image";

const DISCORD_ID = process.env.NEXT_PUBLIC_DISCORD_ID || "";

interface Activity {
  type: number;
  name: string;
  state?: string;
  details?: string;
  application_id?: string;
  timestamps?: {
    start: number;
    end?: number;
  };
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  };
}

interface SpotifyData {
  song: string;
  artist: string;
  album: string;
  track_id: string;
  album_art_url: string;
  timestamps: {
    start: number;
    end: number;
  };
}

interface LanyardData {
  kv: Record<string, string>;
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    bot: boolean;
    global_name: string;
    display_name: string;
    public_flags: number;
  };
  discord_status: "online" | "idle" | "dnd" | "offline";
  activities: Activity[];
  listening_to_spotify: boolean;
  spotify: SpotifyData | null;
}

interface LanyardMessage {
  op: number;
  t?: string;
  d?:
    | LanyardData
    | { heartbeat_interval: number }
    | { subscribe_to_id: string };
}

export function DiscordStatus() {
  const [status, setStatus] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [elapsed, setElapsed] = useState<string>("");
  const [spotifyProgress, setSpotifyProgress] = useState<number>(0);
  const [spotifyTime, setSpotifyTime] = useState<string>("0:00");
  const [spotifyDuration, setSpotifyDuration] = useState<string>("0:00");
  const socketRef = useRef<WebSocket | null>(null);
  const heartbeatIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const connectToLanyard = () => {
      if (socketRef.current) return;

      const ws = new WebSocket("wss://api.lanyard.rest/socket");
      socketRef.current = ws;

      ws.onopen = () => {
        console.log("Connected to Lanyard WebSocket");
      };

      ws.onmessage = (event) => {
        const message: LanyardMessage = JSON.parse(event.data);

        switch (message.op) {
          case 1:
            const interval = (message.d as { heartbeat_interval: number })
              .heartbeat_interval;
            ws.send(
              JSON.stringify({
                op: 2,
                d: { subscribe_to_id: DISCORD_ID },
              })
            );
            heartbeatIntervalRef.current = setInterval(() => {
              ws.send(JSON.stringify({ op: 3 }));
            }, interval);
            break;

          case 0:
            if (message.t === "INIT_STATE" || message.t === "PRESENCE_UPDATE") {
              setStatus(message.d as LanyardData);
              setLoading(false);
            }
            break;
        }
      };

      ws.onclose = () => {
        console.log("Disconnected from Lanyard WebSocket");
        socketRef.current = null;
        if (heartbeatIntervalRef.current) {
          clearInterval(heartbeatIntervalRef.current);
        }
        setTimeout(connectToLanyard, 5000);
      };

      ws.onerror = (error) => {
        console.error("Lanyard WebSocket error:", error);
        ws.close();
      };
    };

    connectToLanyard();

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
      if (heartbeatIntervalRef.current) {
        clearInterval(heartbeatIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!status) return;

    const updateTimes = () => {
      const { activities, spotify } = status;

      const activity = activities.find(
        (a) =>
          a.name === "Code" ||
          a.name === "Visual Studio Code" ||
          a.name === "Cursor"
      );

      if (activity?.timestamps?.start) {
        const startTime = activity.timestamps.start;
        const now = Date.now();
        const diff = now - startTime;

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        if (hours > 0) {
          setElapsed(`${hours}h ${minutes}m elapsed`);
        } else {
          setElapsed(`${minutes}m elapsed`);
        }
      }

      if (spotify?.timestamps) {
        const { start, end } = spotify.timestamps;
        const now = Date.now();
        const total = end - start;
        const current = now - start;
        const progress = Math.min(100, Math.max(0, (current / total) * 100));

        setSpotifyProgress(progress);

        const formatTime = (ms: number) => {
          const minutes = Math.floor(ms / 60000);
          const seconds = Math.floor((ms % 60000) / 1000);
          return `${minutes}:${seconds.toString().padStart(2, "0")}`;
        };

        setSpotifyTime(formatTime(current));
        setSpotifyDuration(formatTime(total));
      }
    };

    updateTimes();
    const timer = setInterval(updateTimes, 1000);
    return () => clearInterval(timer);
  }, [status]);

  if (loading || !status) {
    return (
      <div className="flex flex-col gap-4 w-full max-w-md animate-pulse">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 bg-white/10 rounded-full"></div>
            <div className="w-24 h-4 bg-white/10 rounded"></div>
          </div>
          <div className="w-20 h-6 bg-white/10 rounded-full"></div>
        </div>

        <div className="h-32 bg-[#111] border border-white/5 rounded-xl w-full"></div>
      </div>
    );
  }

  const { discord_status, spotify, activities } = status;

  const codeActivity = activities.find(
    (a) =>
      a.name === "Code" ||
      a.name === "Visual Studio Code" ||
      a.name === "Cursor"
  );

  const isCursor = codeActivity?.name === "Cursor";

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "idle":
        return "bg-yellow-500";
      case "dnd":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "online":
        return "Online";
      case "idle":
        return "Away";
      case "dnd":
        return "Busy";
      default:
        return "Offline";
    }
  };

  const getLargeImage = (activity: Activity) => {
    if (!activity.assets?.large_image) return null;

    if (activity.assets.large_image.startsWith("mp:")) {
      return `https://media.discordapp.net/${activity.assets.large_image.replace(
        "mp:",
        ""
      )}`;
    }

    return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`;
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 text-foreground/90">
          <FaDiscord className="text-[#5865F2] text-xl" />
          <span className="text-sm font-semibold tracking-tight">
            Discord Status
          </span>
        </div>

        <div className="flex items-center gap-2 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.08] backdrop-blur-sm shadow-sm">
          <span
            className={`w-2 h-2 rounded-full ${getStatusColor(
              discord_status
            )} animate-pulse shadow-[0_0_8px_rgba(0,0,0,0.5)]`}
          />
          <span className="text-xs font-medium text-muted-foreground/90 capitalize">
            {getStatusLabel(discord_status)}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {spotify && (
          <div className="group relative overflow-hidden bg-[#111] rounded-xl border border-[#222] p-4 transition-all hover:border-[#1DB954]/30 hover:bg-[#111]/80 hover:shadow-lg hover:shadow-[#1DB954]/5">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <FaSpotify className="text-[#1DB954] text-6xl transform rotate-12" />
            </div>

            <div className="flex items-start gap-4 relative z-10">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-md border border-white/5">
                {spotify.album_art_url ? (
                  <Image
                    src={spotify.album_art_url}
                    alt={spotify.album}
                    fill
                    className="object-cover animate-[spin_8s_linear_infinite]"
                  />
                ) : (
                  <div className="w-full h-full bg-[#1DB954] flex items-center justify-center">
                    <FaSpotify className="text-black text-3xl" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center gap-1">
                  <div className="w-1 bg-[#1DB954] rounded-full music-bar h-3"></div>
                  <div
                    className="w-1 bg-[#1DB954] rounded-full music-bar h-5"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-1 bg-[#1DB954] rounded-full music-bar h-3"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col min-w-0 flex-1 justify-between h-16 py-0.5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1DB954] uppercase tracking-wider mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-pulse" />
                    Listening
                  </div>
                  <a
                    href={`https://open.spotify.com/track/${spotify.track_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-foreground font-semibold truncate block hover:underline decoration-white/30 underline-offset-4"
                  >
                    {spotify.song}
                  </a>
                  <div className="text-xs text-muted-foreground truncate font-medium">
                    {spotify.artist}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-1.5 relative z-10">
              <div className="w-full bg-white/5 rounded-full h-1 overflow-hidden">
                <div
                  className="bg-[#1DB954] h-full rounded-full transition-all duration-1000 ease-linear shadow-[0_0_10px_rgba(29,185,84,0.5)]"
                  style={{ width: `${spotifyProgress}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-medium text-muted-foreground/80">
                <span>{spotifyTime}</span>
                <span>{spotifyDuration}</span>
              </div>
            </div>
          </div>
        )}

        {codeActivity && (
          <div className="group relative overflow-hidden bg-[#0D1117] rounded-xl border border-[#30363D] p-4 transition-all hover:border-[#58A6FF]/30 hover:bg-[#0D1117]/80 hover:shadow-lg hover:shadow-[#58A6FF]/5">
            <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
              {isCursor ? (
                <MousePointer2 className="text-white text-6xl transform -rotate-12" />
              ) : (
                <FaCode className="text-[#007ACC] text-6xl transform -rotate-12" />
              )}
            </div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="relative w-14 h-14 flex-shrink-0">
                <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 bg-black/20 shadow-sm">
                  {getLargeImage(codeActivity) ? (
                    <Image
                      src={getLargeImage(codeActivity)!}
                      alt={codeActivity.assets?.large_text || "Programming"}
                      fill
                      className="object-cover"
                    />
                  ) : isCursor ? (
                    <div className="w-full h-full flex items-center justify-center bg-[#222]">
                      <MousePointer2 className="w-8 h-8 text-white fill-white" />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#1E1E1E]">
                      <FaCode className="w-8 h-8 text-[#007ACC]" />
                    </div>
                  )}
                </div>

                <div className="absolute -bottom-1.5 -right-1.5 bg-[#1E1E1E] rounded-full p-1 border border-[#30363D] shadow-sm">
                  {isCursor ? (
                    <MousePointer2 className="w-3.5 h-3.5 text-white fill-white" />
                  ) : (
                    <FaCode className="w-3.5 h-3.5 text-[#007ACC]" />
                  )}
                </div>
              </div>

              <div className="flex flex-col min-w-0 flex-1 gap-1">
                <div className="flex items-center justify-between">
                  <div
                    className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                      isCursor ? "text-white" : "text-[#58A6FF]"
                    }`}
                  >
                    <Monitor className="w-3 h-3" />
                    {isCursor ? "Cursor IDE" : "VS Code"}
                  </div>
                  {elapsed && (
                    <div className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                      <Clock className="w-2.5 h-2.5" />
                      {elapsed}
                    </div>
                  )}
                </div>

                <div className="text-sm text-foreground font-semibold truncate">
                  {codeActivity.assets?.large_text || "Writing Code"}
                </div>

                <div className="text-xs text-muted-foreground truncate font-medium">
                  {codeActivity.details ? "Working on a project" : "Idle"}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
