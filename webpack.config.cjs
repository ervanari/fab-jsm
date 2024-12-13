const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js', // Replace with your entry point
    output: {
        filename: 'widget-jsm.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Match .js and .jsx files
                exclude: /node_modules/, // Exclude dependencies
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',  // Menyisipkan CSS ke dalam DOM
                    'css-loader',    // Menerjemahkan file CSS
                    'sass-loader',   // Mengonversi SCSS menjadi CSS
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'] // Resolve these extensions
    }
};
