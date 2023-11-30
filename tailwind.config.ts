import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: "#fff",
        midnightblue: {
          "100": "#030f72",
          "200": "#020e72",
        },
        mediumblue: {
          "100": "#081ede",
          "200": "rgba(8, 30, 222, 0.085)",
        },
        ghostwhite: "#f3f4fd",
        dimgray: "#4d506c",
        darkblue: {
          "100": "#011196",
          "200": "rgba(1, 17, 150, 0.32)",
        },
      },
      spacing: {},
      fontFamily: {
        "space-grotesk": "'Space Grotesk'",
      },
      borderRadius: {
        "13xl": "32px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      xl: "20px",
      "45xl": "64px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  plugins: [],
}
export default config
