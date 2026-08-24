import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  { ignores: ["auric-signal-web-handoff/**", ".next/**"] },
  ...nextCoreWebVitals,
  ...nextTypescript,
];

export default eslintConfig;
