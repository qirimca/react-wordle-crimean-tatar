module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        short: { raw: '(max-height: 650px)' },
        xshort: { raw: '(max-height: 560px)' },
        xxshort: { raw: '(max-height: 490px)' },
      },
      colors: {
        'qirim-bg-light': '#f5f5f5',
        'qirim-text-dark': '#52494b',
        'qirim-primary': '#99ceef',
        'qirim-accent': '#ff955b',
        'qirim-gray': '#85787b',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
