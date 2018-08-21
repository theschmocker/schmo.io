import React from 'react'
import styled from 'styled-components';

import ContentHeading from '../components/ContentHeading';
import Article from '../components/Article';
import ProjectListing from '../components/ProjectListing';
import StyledAnchor from '../components/StyledAnchor';


const ProjectPage = ({ data }) => (
    <Article>
        <StyledProjectsList>
            <ContentHeading>Projects</ContentHeading>
            {data.allMarkdownRemark.edges.map(({ node }) => <ProjectListing project={node} />)}
        <OtherProjects>You can check out some of my other projects on <StyledAnchor href="https://github.com/theschmocker">Github</StyledAnchor></OtherProjects>
        </StyledProjectsList>
    </Article>
)

const StyledProjectsList = styled.article`
    padding: 5rem 1.25rem;
    margin: 0 auto;
    max-width: 600px;
    color: #eee;
`;

const OtherProjects = styled.p`
    margin: 1.6rem 0;
    padding: 1.5rem 0;
    border-top: 1px solid #777;
    font-size: 1.1rem;
    opacity: 0.7;
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
