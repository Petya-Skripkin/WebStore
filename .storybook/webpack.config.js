const path = require("path");
module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader")
      },
      // To show props table
      {
        loader: require.resolve("react-docgen-typescript-loader"),
        options: {
          tsconfigPath: path.join(__dirname, "../tsconfig.json"),
        }
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"]
  });

  config.module.rules.push({
    test: /\.(woff(2)?|ttf|eot|svg|otf|gif)(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url-loader?limit=10000"
  });

  config.node = {
    fs: "empty"
  };

  return config;
};
