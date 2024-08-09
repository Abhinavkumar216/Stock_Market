module.exports = {
  project: {
    ios: {},
    android: {},
  },
  'react-native-vector-icons': {
    Platform: {
      ios: null,
    },
  },
  assets: ['./src/assets/fonts/'],
  getTransformModulePath(){
    return require.resolve('react-native-svg-transformer');
  },
  getSourceExts: () => ['ts', 'tsx'],
};
