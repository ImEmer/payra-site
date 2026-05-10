/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        foreground: "#FFFFFF",
        card: "#141414",
        border: "#262626",
        muted: "#1A1A1A",
        "muted-foreground": "#A3A3A3",
        primary: "#0A2F6C",
        "primary-foreground": "#FFFFFF",
        accent: "#1E3A8A",
        "accent-foreground": "#FFFFFF",
      },
      boxShadow: {
        glow: "0 0 40px rgba(30,58,138,0.5)",
      },
    },
  },
  plugins: [],
};
