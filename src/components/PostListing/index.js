import React from 'react';
import Link from 'gatsby-link';

const PostListing = ({ post } ) => (
    <div>
        <h2><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h2>
        <p>{post.frontmatter.date}</p>
        <p>{post.frontmatter.description}</p>
    </div>
);

export default PostListing;
