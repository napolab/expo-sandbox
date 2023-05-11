/** @type {import('@babel/core').ConfigFunction} */
module.exports = (api) => {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
          },
        },
      ],
    ],
  }
}
