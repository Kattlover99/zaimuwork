/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    screens: {
      xxxs: "340px",
      xxs: "380px",
      xs: "480px",
      ...defaultTheme.screens
    },
    container: {
      screens: {
          'xxs': '100%',
          'xs': '480px',
          ...defaultTheme.screens
      }
    },
		fontFamily: {
      body: [
        '"Noto Sans JP"',
      '"ヒラギノ角ゴシック"',
      '"ヒラギノ角ゴ Pro W3"',
      '"Hiragino Kaku Gothic Pro"',
      '"ＭＳ Ｐゴシック"',
      '"MS PGothic"',
      'Sans-Serif'
      ],
      'serif': ['ten-mincho-text','"ヒラギノ明朝 ProN W6"', '"HiraMinProN-W6"', '"HG明朝E"', '"ＭＳ Ｐ明朝"', '"MS PMincho"', '"MS 明朝"', 'serif'],
      'serif02': ['source-han-serif-japanese','"ヒラギノ明朝 ProN W6"', '"HiraMinProN-W6"', '"HG明朝E"', '"ＭＳ Ｐ明朝"', '"MS PMincho"', '"MS 明朝"', 'serif'],
      'sans': ['"Open Sans"', 'sans-serif'],
      'num': ['"EB Garamond"', 'serif'],
      'midashi': [ 'source-han-sans-japanese',
      '"ヒラギノ角ゴシック"',
      '"ヒラギノ角ゴ Pro W3"',
      '"Hiragino Kaku Gothic Pro"',
      '"ＭＳ Ｐゴシック"',
      '"MS PGothic"',
      'Sans-Serif']
    },
		colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'gray': '#DDDDDD',
      'body': '#3a3b44',
      'primary': '#0C94B1',
      'secondary': '#176983',
      'pincolor': '#FEFFC2',
      'odd': '#EEF4F6',
      'even': '#E0E7EB',
      'light': '#E1F1F6',
      'light02': '#D6F4FE',
      'main01': '#B3DFEE',
      'main02': '#5AB3C6',
      'btnst': '#E3FEEE',
      'btnen': '#BCF3FF',
    },
		letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '1px',
      wider: '2px',
      widest: '4px',
    },
		extend: {
      height: {
        'navm': '60px',
      },
      padding: {
        'navm': '60px',
      },
      lineHeight: {
        'ribbon': '36px',
      },
      borderWidth: {
        'ribbon': '18px',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',
        'fit-auto': 'repeat(auto-fit, minmax(0, 1fr))',
        'jcard-xl': 'repeat(auto-fit, minmax(310px, 340px))',
        'jcard-md': 'repeat(auto-fit, minmax(min(100%, 240px), 340px))',
      }
    },
	},
	plugins: [],
}
