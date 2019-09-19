module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@routes': './src/routes',
          '@views': './src/views',
          '@stylesheets': './src/assets/stylesheets',
          '@images': './src/assets/images',
          '@utils': './src/utils',
          '@database': './src/database',
          '@config': './src/config',
          '@http': './src/http',
          '@redux-store': './src/redux/store',
          '@redux-reducers': './src/redux/reducers',
        },
      },
    ],
  ],
};
