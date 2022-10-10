import React from 'react'
import { Post } from '../../Common/interfaces/post.interface';

import { PostGridItem } from './post-grid-item/post-grid-item.component';

interface PostGridProps{
    posts: Post[];
}

export const PostGrid:React.FC<PostGridProps> = (props: PostGridProps) => {
  return (
    <div className='posts-grid'>
        {props.posts.map((post) => {
            return(
                <div key={post.id}>
                    <PostGridItem post={post} />
                </div>
            )
        })}

    </div>
  )
}
