import { Link } from 'gatsby';
import React from 'react';
import { css } from '@emotion/core';
import ReadLink from './read-link';
import GatsbyImage from 'gatsby-image';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      display: flex;
      margin-top: 0.75rem;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <Link
      to={post.slug}
      css={css`
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}
      alt={post.title}
    >
      <GatsbyImage
        fluid={post.image.sharp.fluid}
        css={css`
          * {
            margin-top: 0;
          }
        `}
      />
    </Link>
    <div>
      <h3>
        <Link to={post.slug}>{post.title} </Link>{' '}
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post ➡ </ReadLink>
    </div>
  </article>
);

export default PostPreview;
