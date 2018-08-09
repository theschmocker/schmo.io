import React from 'react'
import Link from 'gatsby-link';
import styled from 'styled-components';

import Article from '../../components/Article';
import ContentHeading from '../../components/ContentHeading';
import StyledAnchor from '../../components/StyledAnchor';

const BackLink = styled(Link)`
    display: inline-block;
    padding: 2rem 0;
    color: #aaa;
    text-decoration: none;

    &:hover {
        color: #fff;
    }
`;

const Project = ({ data }) => (
    <Article>
        <StyledProject >
            <BackLink to="/projects">&larr; Back</BackLink>
            <ContentHeading>{data.markdownRemark.frontmatter.name}</ContentHeading>
            <ExternalLinks>
                <StyledAnchor href={data.markdownRemark.frontmatter.repo}>Github</StyledAnchor>
                {data.markdownRemark.frontmatter.liveURL && 
                        <StyledAnchor href={data.markdownRemark.frontmatter.liveURL}>Live</StyledAnchor> 
                }
            </ExternalLinks>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </StyledProject>
    </Article>
)

const ExternalLinks = styled.div`
    margin-bottom: 2rem;
    a {
        display: inline-block;
        margin-right: 0.5rem;
        opacity: 0.9;
    }
`;

const StyledProject = styled.section`
    max-width: 600px;
    padding: 1.25rem;
    margin: 0 auto;
    a {

    }

    p {
        line-height: 1.4;
    }
`;

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
