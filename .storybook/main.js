module.exports = {
  "stories": [
    "../src/App.stories.mdx",
    "../src/App.stories.js"
  
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  "features": {
    interactionsDebugger: true, // 👈 Enable playback controls
  },

  "framework": "@storybook/react",
  
  "core": {
    "builder": "webpack5"
  }
}