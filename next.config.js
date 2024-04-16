/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ftp.goit.study",
        port: "",
        pathname: "/img/so-yummy/**",
      },
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { dev, isServer, webpack, nextRuntime }) => {
    config.module.rules.push({
      test: /\.node$/,
      use: [
        {
          loader: "node-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
