import React from 'react'
import { Post } from '../../Common/interfaces/post.interface'

import { PostGrid } from '../../Components/post-grid/post-grid.component'
import { useGetPosts } from '../../hooks/posts/useGetPosts'

export const Home : React.FC = () => {

  const posts = useGetPosts(); 
  console.log(posts)


  return (
    <div className='home'>
      <PostGrid posts={posts||[]}></PostGrid>

    </div>
  )
}
