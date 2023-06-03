const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const srcDir = path.resolve(__dirname, "src");


module.exports = (env, options) => {
    const mode = options.mode || 'development'

    const config = {
        entry: [path.resolve(srcDir, "index.js")],
        mode,
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js?[hash]'
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.html$/,
                    loader: "html-loader"
                },
                {
                    test: /\.(jpg|png|gif|svg|mp3)$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "assets/[name].[ext]?[hash]"
                        }
                    }
                },
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(srcDir, "html", "index.html"),
                filename: "index.html",
            })
        ],

        resolve: {
            extensions: [".js"]
        }
    };

    return config;
}