import React from 'react'
import styled from 'styled-components';

import ContentHeading from '../components/ContentHeading';
import Article from '../components/Article';
import ProjectListing from '../components/ProjectListing';


const ProjectPage = ({ data }) => (
    <Article>
        <StyledProjectsList>
            <ContentHeading>Projects</ContentHeading>
            {data.allMarkdownRemark.edges.map(({ node }) => <ProjectListing project={node} />)}
        </StyledProjectsList>
  </Article>
)

const StyledProjectsList = styled.article`
    padding: 5rem 1.25rem;
    margin: 0 auto;
    max-width: 600px;
    color: #eee;
`;

export default ProjectPage

export const query = graphql`
    query ProjectQuery {
        allMarkdownRemark(
            filter: { 
                fields: { type: {eq: "projects"} } 
            }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        name
                        description
                    }
                }
            }
        }
    }
`;
