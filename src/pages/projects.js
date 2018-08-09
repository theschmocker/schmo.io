import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/StyledSection';

const ProjectListing = ({ project }) => (
    <div>
        <Link to={project.fields.slug}><h3>{project.frontmatter.name}</h3></Link>
        <p>{project.frontmatter.description}</p>
    </div>
)

const ProjectPage = ({ data }) => (
  <Section>
    <h2>Projects</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => <ProjectListing project={node} />)}
  </Section>
)

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
