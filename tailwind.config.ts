import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "ui-primary": "#0f172a",
        "ui-secondary": "#94a3b8",
        "ui-gray": "#e5e7eb",
      },
    },
  },
  plugins: [],
} satisfies Config;
