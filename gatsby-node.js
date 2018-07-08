const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const slugify = require('slugify');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({
            node,
            getNode,
            basePath: 'pages',
        });

        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });

        const typeFromSlug = slug.split('/')[1]; // '/blog/test' would make it 'blog'
        const type = typeFromSlug || 'page';

        createNodeField({
            node,
            name: 'type',
            value: type,
        });
    }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                                type
                            }
                        }
                    }
                }
            }
        `).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                const componentPath = 
                    node.fields.type === 'blog'
                        ? './src/templates/BlogPost/index.js'
                        : './src/templates/Project/index.js';
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(componentPath),
                    context: {
                        slug: node.fields.slug,
                    }
                })
            });
            resolve();
        });
    });
}
