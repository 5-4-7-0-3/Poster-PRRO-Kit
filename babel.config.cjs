const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        browsers: 'since 2017',
      },
      modules: 'commonjs',
    },
  ],
];

module.exports = { presets };