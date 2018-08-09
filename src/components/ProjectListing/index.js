import React from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components';

const ProjectListing = ({ project, className }) => (
    <div className={className}>
        <Link to={project.fields.slug}><h3>{project.frontmatter.name}</h3></Link>
        <p>{project.frontmatter.description}</p>
    </div>
)

export default styled(ProjectListing)`
    a {
        color: #eee;
        opacity: 0.9;
        &:visited {
            color: #eee;
        }
        &:hover {
            color: #fff;
        }
    }

    p {
        opacity: 0.7;
    }
`;
