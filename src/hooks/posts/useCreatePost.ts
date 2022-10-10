import {gql, useQuery,useMutation} from '@apollo/client'
import { channel } from 'diagnostics_channel';
import { create } from 'domain';
import { Post } from '../../Common/interfaces/post.interface';

interface CreatePostInput{
    variables: {
        input: {
            title:string,
            body:string
        }
    }
}



const CREATE_POST = gql`
    mutation CreatePost($input: CreatePostInput!){
        createPost(input:$input) {
            id
            title
            body
        }
    }
`

export const useCreatePost = (): ((
    createPostInput: CreatePostInput
) => any) =>{
    const [createPost] = useMutation(CREATE_POST, {
        update(cache, {data: {createPost}}){
            cache.modify({
                fields:{
                    posts(existingPosts = []) {
                        const newPostRef = cache.writeFragment({
                            data: createPost, 
                            fragment: gql`
                                fragment NewPost on Post{
                                    id,
                                    title,
                                    body
                                }
                            `
                        });
                        return [...existingPosts, newPostRef]
                    }
                }
            })
        }
    })
    return createPost
}