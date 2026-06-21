import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

/**
 * ESLint 9 flat config — Next.js 16 recommended setup.
 *
 * Uses the native flat config exports from `eslint-config-next`.
 * `next lint` is removed in Next.js 16 — use `eslint src` directly.
 *
 * To add project-specific rules:
 *   Add a new config object to the array below with your custom rules.
 */
const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", "out/**", "node_modules/**"]),
]);

export default eslintConfig;
