/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "file-loader",
        options: {
          limit: 8192,
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
