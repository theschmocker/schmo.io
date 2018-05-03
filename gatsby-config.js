module.exports = {
    siteMetadata: {
        title: 'Gatsby Tutorial',
        desc: "Levelup Tutorials - Pro Gatsby",
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/media/`,
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [{
                    resolve: 'gatsby-remark-images',
                    options: {
                        maxWidth: 600,
                    }
                }],
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
    ],
};
