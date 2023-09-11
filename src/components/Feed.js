import React from 'react'
import Post from './Post'

const Feed = ({ posts }) => {
    
    const postElement = posts.map(post => <Post 
                                              key={post.id}
                                              post={post} 
                                          />)

  return (
    <>
      {postElement}
    </>
  )
}

export default Feed
