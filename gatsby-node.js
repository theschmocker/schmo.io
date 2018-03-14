/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

// this is all gibberish and I have no idea what's going on 
const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const slugify = require('slugify');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;
    if (node.internal.type === 'MarkdownRemark') {
        //const slug = createFilePath({
        //    node,
        //    getNode,
        //    basePath: 'posts',
        //});
        const slug = slugify(node.frontmatter.title, { lower: true });
        console.log('\n' + slug + '\n');
        createNodeField({
            node,
            name: 'slug',
            value: `/blog/${slug}/`,
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
                            }
                        }
                    }
                }
            }
        `).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve('./src/components/BlogPost/index.js'),
                    context: {
                        slug: node.fields.slug,
                    }
                })
            });
            resolve();
        });
    });
}
