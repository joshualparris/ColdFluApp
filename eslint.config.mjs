import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });
const config = [...compat.extends("next/core-web-vitals", "next/typescript"), { ignores: [".next/**", "_copilot-staging/**", "inputs/**", "next-env.d.ts"] }];
export default config;
