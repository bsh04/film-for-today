module.exports = {
  images: {
    domains: ['kinopoiskapiunofficial.tech'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
