import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      padding: {
        "front-banner": "16rem",
        front: "10rem",
        inner: "7.5rem",
        "header-xl": "4.5rem",
        "header-lg": "4.5rem",
        "header-md": "4rem",
        "header-sm": "3.5rem",
      },
      fontSize: {
        xxs: "0.625rem",
        "6xl": "4rem",
      },
      maxWidth: {
        "screen-limit": "199rem",
      },
      maxHeight: {
        "screen-x2": "200vh",
      },
      width: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "6.5": "1.625rem",
        "7.5": "1.875rem",
        "8.5": "2.125rem",
        "9.5": "2.375rem",
        "10.5": "2.625rem",
        "11.5": "2.875rem",
        "12.5": "3.125rem",
        "13.5": "3.375rem",
        "14.5": "3.625rem",
        "15.5": "3.875rem",
        "16.5": "4.125rem",
        "17.5": "4.375rem",
        "18.5": "4.625rem",
        "19.5": "4.875rem",
        "20.5": "5.125rem",
        "100": "25rem",
        "128": "32rem",
        "150": "37.5rem",
        "175": "43.75rem",
        "200": "50rem",
        "225": "56.25rem",
        "250": "62.5rem",
        "275": "68.75rem",
        "300": "75rem",
      },
      height: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "6.5": "1.625rem",
        "7.5": "1.875rem",
        "8.5": "2.125rem",
        "9.5": "2.375rem",
        "10.5": "2.625rem",
        "11.5": "2.875rem",
        "12.5": "3.125rem",
        "13.5": "3.375rem",
        "14.5": "3.625rem",
        "15.5": "3.875rem",
        "16.5": "4.125rem",
        "17.5": "4.375rem",
        "18.5": "4.625rem",
        "19.5": "4.875rem",
        "20.5": "5.125rem",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          lighter: "hsl(var(--primary-lighter))",
          dark: "hsl(var(--primary-dark))",
          darker: "hsl(var(--primary-darker))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          dark: "hsl(var(--card-dark))",
          light: "hsl(var(--card-light))",
        },
        socials: {
          telegram: "#2AABEE",
          whatsapp: "#25D366",
          vk: "#0077FF",
        },
      },
      boxShadow: {
        "button-default": "0 0 1.5rem 0.6rem rgba(209,252,214,0.15)",
        "button-triggered": "0 0 4rem 2rem rgba(209,252,214,0.15)",
      },
      dropShadow: {
        primary: "0 0 12px hsla(var(--primary) / 0.5)",
        secondary: "0 0 12px hsla(var(--secondary) / 0.5)",
        "primary-xl": "0 0 20px hsla(var(--primary) / 0.6)",
        "secondary-xl": "0 0 20px hsla(var(--secondary) / 0.6)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shine: {
          from: {
            backgroundPosition: "100%",
          },
          to: {
            backgroundPosition: "-100%",
          },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shine: "shine 2s linear infinite",
        gradient: "gradient 8s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("tailwind-gradient-mask-image"),
  ],
} satisfies Config;

export default config;
