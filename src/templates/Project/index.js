import React from 'react'
import styled from 'styled-components';

const Project = ({ data }) => (
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}>
    </div>
)

export default Project;

export const query = graphql`
    query SingleProjectQuery($slug: String!) {
        markdownRemark (fields: { slug: {eq: $slug} }) {
            frontmatter {
                name
                repo
                liveURL
                technologies
            }

            html
        }
    }
`;
