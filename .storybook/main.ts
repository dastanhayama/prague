  import type { StorybookConfig } from '@storybook/nextjs';

  const config: StorybookConfig = {
    stories: [
      "../src/**/*.mdx",
      "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
      "@storybook/addon-essentials",
      "@storybook/addon-onboarding",
      "@chromatic-com/storybook",
    ],
    framework: {
      name: "@storybook/nextjs",
      options: {}
    },
    staticDirs: ["../public", "../src/components/BackgroundPatternDecorative/images"],
    webpackFinal: async (config : any) => {
      // Ensure the config has a module and rules array
      if (!config.module) {
        config.module = { rules: [] };
      }

      // Filter out the default file-loader rule for SVGs
      const fileLoaderRule = config.module.rules.find((rule) => {
        if (rule.test && typeof rule.test.test === 'function') {
          return rule.test.test('.svg');
        }
        return false;
      });

      if (fileLoaderRule) {
        fileLoaderRule.exclude = /\.svg$/;
      }

      // Add SVGR loader
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false, // Enable SVGO optimization
              svgoConfig: {
                plugins: [
                  { name: 'removeViewBox', active: false }, // Keep viewBox attribute
                  { name: 'removeDimensions', active: true }, // Optional: Remove width/height attributes
                ],
              },
            },
          },
        ],
      });

      // Return the updated config
      return config;
    },
  };

  export default config;