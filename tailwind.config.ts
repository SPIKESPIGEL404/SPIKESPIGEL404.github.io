import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'var(--tw-prose-body)',
            a: { 
              textDecoration: 'none', 
              '&:hover': { 
                textDecoration: 'underline' 
              } 
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;