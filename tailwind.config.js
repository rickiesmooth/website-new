module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.*js',
    './src/**/*.tsx',
    './src/*.tsx',
    './content/**/*.md',
    './utils/**.js',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
