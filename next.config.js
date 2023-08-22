/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                },
                {
                    loader: "file-loader",
                    options: {
                        name: "static/[path][name].[ext]",
                    },
                },
            ],
            type: "javascript/auto",
            issuer: {
                and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
            },
        });

        return config;
    },
};

module.exports = nextConfig;
