import React from 'react';

const Post = ({ match, posts }) => {
   const postId = match.params.postsId
   const getPostById = (id) => {
      return posts.find((post) => post.id.toString() === id)
   }
   const post = getPostById(postId)
   return <h2>{post ? post.label : `Post with id:${postId} not found`}</h2>
}

export default Post;