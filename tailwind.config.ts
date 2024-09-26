import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        gray: {
          '-1': '#E6E6E6',
          1.5: '#737373',
          10: '#000000',
          2: '#646464',
          4: '#292929',
          5: '#0B0B0B',
          9.5: '#010101',
        },
        green: {
          3: '#C8FEC7',
        },
        purple: {
          1: '#E9DFFC',
          3: '#BE9FF6',
          4: '#A87FF3',
          5: '#925FF0',
          6: '#784DC7',
        },
        pink: {
          1: '#FA709A',
        },
        yellow: {
          1: '#FEE140',
        },
      },
    },
  },
  plugins: [],
};
export default config;
