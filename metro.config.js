const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration for React Native with Reanimated
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resetCache: true,
  // You can add any other custom configurations here
};

module.exports = wrapWithReanimatedMetroConfig(
  mergeConfig(getDefaultConfig(__dirname), config)
);
