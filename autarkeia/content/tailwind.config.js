/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(220, 20%, 7%)",    // #0f1217
        foreground: "hsl(0, 0%, 95%)",      // #f1f1f1
        card: {
          DEFAULT: "hsl(215, 20%, 12%)",    // #1a222d
          foreground: "hsl(0, 0%, 95%)",
        },
        popover: {
          DEFAULT: "hsl(215, 20%, 12%)",
          foreground: "hsl(0, 0%, 95%)",
        },
        primary: {
          DEFAULT: "hsl(217, 59%, 48%)",    // #3466c3
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(215, 15%, 17%)",    // #121820
          foreground: "hsl(0, 0%, 95%)",
        },
        muted: {
          DEFAULT: "hsl(215, 15%, 17%)",    // #121820
          foreground: "hsl(210, 12%, 71%)", // #adbac7
        },
        accent: {
          DEFAULT: "hsl(215, 15%, 17%)",
          foreground: "hsl(0, 0%, 95%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        border: "hsl(215, 20%, 25%)",
        input: "hsl(215, 20%, 25%)",
        ring: "hsl(217, 59%, 48%)",
        radius: "0.5rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont", 
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif"
        ],
      },
    },
  },
  plugins: [],
};