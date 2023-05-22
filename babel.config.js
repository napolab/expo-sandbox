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
            '@logic': './src/logic',
            '@theme': './src/theme',
          },
        },
      ],
      require.resolve('expo-router/babel'),
    ],
  }
}
