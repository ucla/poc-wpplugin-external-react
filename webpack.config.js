const {hasArgInCLI, hasBabelConfig} = require('@wordpress/scripts/utils');

const hasReactFastRefresh = hasArgInCLI('--hot') && !isProduction;

const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
    ... defaultConfig,

    module: {
        rules: [
            ... defaultConfig.module.rules, {
                test: /\.(j|t)sx?$/,
                // exclude: /node_modules/,
                include: [__dirname + '/node_modules/wcl-react-poc/src/'],
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            // Babel uses a directory within local node_modules
                            // by default. Use the environment variable option
                            // to enable more persistent caching.
                            cacheDirectory: process.env.BABEL_CACHE_DIRECTORY || true,

                            // Provide a fallback configuration if there's not
                            // one explicitly available in the project.
                            ...(!hasBabelConfig() && {
                                babelrc: false,
                                configFile: false,
                                presets: [
                                    require.resolve('@wordpress/babel-preset-default'),
                                ],
                                plugins: [
                                    hasReactFastRefresh && require.resolve('react-refresh/babel'),
                                ].filter(Boolean)
                            })
                        }
                    },
                ]
            },
        ]
    }
};
