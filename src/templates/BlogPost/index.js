import React from 'react';
import Section from '../../components/StyledSection';

const Post = ({ data, transition }) => (
    <Section style={transition && transition.style}>
        <h2>{data.markdownRemark.frontmatter.title}</h2>
        <p>{data.markdownRemark.frontmatter.date}</p>
        <p><em>{data.markdownRemark.frontmatter.description}</em></p>
        {<div dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
        }}/>}
    </Section>
)

export default Post;

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
            html
        }
    }
`;
