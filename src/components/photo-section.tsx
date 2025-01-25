import Image from "next/image";

export function PhotoSection() {
  return (
    <div className="aspect-square overflow-hidden p-0">
      <div className="relative h-full w-full rounded-full overflow-hidden m-4">
        <Image
          src="https://avatars.githubusercontent.com/u/68776478?v=4"
          alt="Profile"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
