module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        light: { raw: '(prefers-color-scheme: light)' },
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
      rotate: {
        '-10': '-10deg',
        10: '10deg',
      },
      fontSize: {
        '7xl': '6rem',
      },
    },
  },
}
