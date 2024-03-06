// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/static/images/header-background.jpg')",
        'product-development': "url('/static/images/home/08_1_FONDO_dan_artesana_jam_new.jpg')",
        'footer': "url('/static/images/footer-background.png')"
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', ...fontFamily.sans],
        serif: ['var(--font-crimsonPro)', ...fontFamily.serif],
      },
      colors: {
        primary: colors.pink,
        dvHeaderBG: '#3c2e84',
        dvHeaderBorder: '#873bc1',
        dvFooterRight: "#b6214e",
        dvFooterLeft: "#5a1f3e",
        dvText: '#02145e',
        headings: '#595cb9',
        dvProdBg: '#e5c27e',
        dvTrainingBg: 'rgba(247, 230, 191, 1)',
        dvTrainingBgTransparent: 'rgba(247, 230, 191, 0.8)',
        dvConsultingBg: '#f3edd7',
        dvBisque: '#f5dcc8',
        dvBlue1: '#4623b4',
        dvBlueProjects: '#001e64',
        dvBrown1: '#823c0c',
        dvBrown2: '#966446',
        dvBrown3: '#a58264',
        dvBrown4: '#915a2d',
        dvFuchsia1: '#a0234b',
        dvFuchsia2: '#c81487',
        dvPurple1: '#411937',
        dvPurple2: '#5f2d91',
        dvPurple3: '#3c1964',
        dvPurple4: '#7d2882',
        dvPurple5: '#5a0fbe',
        dvOrangeGold1: '#d7a042',
      },
      fontSize: {
        base: ['1rem', '1.5'],
        sm: ['1.1rem', '1.5'],
        md: ['1.125rem', '1.5'],
        lg: ['1.25rem', '1.5'],
        site_title: ['1.8rem', {
          lineHeight: '1.5',
          fontWeight: 'bold',
          letterSpacing: '2px'
        }],
        site_title_sm: ['2.2rem', {
          lineHeight: '1.5',
          fontWeight: 'bold',
        }],
        site_title_md: ['2.5rem', {
          lineHeight: '1.5',
          fontWeight: '600',
        }],
        site_title_lg: ['3.1rem', {
          lineHeight: '1.5',
          fontWeight: '700',
        }],
        site_description: ['1rem', {
          lineHeight: '1.1',
          fontWeight: 'normal',
          letterSpacing: '2px'
        }],
        site_description_sm: ['1.1rem', {
          lineHeight: '1.2',
          fontWeight: 'normal',
        }],
        site_description_md: ['1.2rem', {
          lineHeight: '1',
          fontWeight: '600',
        }],
        site_description_lg: ['1.125rem', {
          lineHeight: '1',
          fontWeight: '700',
        }],
      },  
      typography: ({ theme }) => ({
        DEFAULT: {
          // css: {
          //   a: {
          //     color: theme('colors.primary.500'),
          //     '&:hover': {
          //       color: `${theme('colors.primary.600')}`,
          //     },
          //     code: { color: theme('colors.primary.400') },
          //   },
          //   'h1,h2': {
          //     fontWeight: '700',
          //     // letterSpacing: theme('letterSpacing.tight'),
          //   },
          //   h3: {
          //     fontWeight: '600',
          //   },
          //   code: {
          //     color: theme('colors.indigo.500'),
          //   },
          //   'h1,h2,h3,h4,h5,h6': {
          //     color: theme('colors.red.500'),
          //     height: 'auto'
          //   },
          // },
        },
        invert: {
          // css: {
          //   a: {
          //     color: theme('colors.primary.500'),
          //     '&:hover': {
          //       color: `${theme('colors.primary.400')}`,
          //     },
          //     code: { color: theme('colors.primary.400') },
          //   },
          //   'h1,h2,h3,h4,h5,h6': {
          //     color: theme('colors.red.500'),
          //     height: 'auto'
          //   },
          // },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
