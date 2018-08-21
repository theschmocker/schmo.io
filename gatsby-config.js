module.exports = {
    siteMetadata: {
        title: 'Jacob Schmocker',
        desc: 'Jacob Schmocker is a web developer, soon-to-be student of computer science, and a Linux enthusiast.',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
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
        'gatsby-plugin-react-next',
        'gatsby-plugin-styled-components',
    ],
};
