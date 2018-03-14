
import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/StyledSection';
import PostListing from '../components/PostListing';

const BlogPage = ({ transition, data }) => (
    <Section style={transition && transition.style}> 
        {
            data.allMarkdownRemark.edges.map(({ node }) => (
                <PostListing key={node.id} post={node}/>
            ))
        }
    </Section>
)

export default BlogPage

export const query = graphql`
    query PostQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYY")
                        description
                    }
                }
            }
        }
    }
`;
