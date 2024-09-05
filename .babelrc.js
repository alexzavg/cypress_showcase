module.exports = function (api) {
  api.cache(false)
  const plugins = [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          pages: './cypress/pages',
          utils: './cypress/utils',
        },
      },
    ],
  ]

  return {
    plugins,
  }
}
