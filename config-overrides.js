// config-overrides.js
module.exports = {
  webpack: function (config, env) {
    if (env === "production") {
      //JS Overrides
      config.output.filename = "static/js/[name].js";
      config.output.chunkFilename = "static/js/[name].chunk.js";

      //CSS Overrides
      config.plugins[4].options.filename = "static/css/[name].chunk.css";
      config.plugins[4].options.chunkFilename = "static/css/[name].chunk.css";
    }

    return config;
  },
};
