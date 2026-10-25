const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    // Start with src/index.ts, which imports src/styles/index.scss.
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: isProduction ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Development: hot-inject styles. Production: emit a CSS file.
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },

        {
   test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
   type: 'asset/resource',
   generator: {
     filename: 'images/[name].[contenthash:8][ext]',
   },
}

        
      ],
    },
    plugins: [
      // Uses src/index.html as the page and injects compiled assets for us.
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/index.html') }),
      ...(isProduction
        ? [new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash:8].css' })]
        : []),
    ],
    devtool: isProduction ? false : 'eval-cheap-module-source-map',
    devServer: {
      static: false,
      port: 9000,
      open: true,
      hot: true,
      liveReload: true,
      client: { overlay: true },
    },
  };
};
