import React from 'react'
import { Post } from '../../../Common/interfaces/post.interface'

interface PostGridItemProps{
    post:Post;
}

export const PostGridItem: React.FC<PostGridItemProps> = (props:PostGridItemProps) => {
  return (
    <div className=''>
        <p>{props.post.id}</p>
        <p>{props.post.title}</p>
        <p>{props.post.body}</p>
    </div>
  )
}
