const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@views': path.resolve(__dirname, './src/views'),
      '@stylesheets': path.resolve(__dirname, './src/assets/stylesheets'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@database': path.resolve(__dirname, './src/database'),
      '@config': path.resolve(__dirname, './src/config'),
      '@http': path.resolve(__dirname, './src/http'),
      '@redux-store': path.resolve(__dirname, './src/redux/store'),
      '@redux-reducers': path.resolve(__dirname, './src/redux/reducers'),
    },
  },
};
