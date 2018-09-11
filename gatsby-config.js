module.exports = {
    siteMetadata: {
        title: 'zimmerfrei.stenz.de',
        description: 'Zimmervermietung in Leezen bei Schwerin',
        description: 'Zimmervermietung in Leezen bei Schwerin',
        siteUrl: 'https://www.stenz.de',
        author: 'Sirko Stenz',
        adsense: '',
    },
    pathPrefix: '/',
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: 'src/pages',
                name: 'pages',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 630,
                        },
                    },
                    "gatsby-remark-copy-linked-files",
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        'gatsby-transformer-remark',
        'gatsby-plugin-offline',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sitemap',
        'gatsby-transformer-sharp',
    ],
}
