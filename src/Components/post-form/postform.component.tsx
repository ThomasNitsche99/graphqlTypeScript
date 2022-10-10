import React from 'react'
import { useForm } from 'react-hook-form'
import { useCreatePost } from '../../hooks/posts/useCreatePost';


interface FormData{
  title: string, 
  body:string
}

export const PostsForm: React.FC = () => {

  const{register, handleSubmit} = useForm<FormData>();
  const createPost = useCreatePost();

  const onSubmit = handleSubmit(({title, body}) =>{
    createPost({variables: {input: {title,body}}});
  });


  return (
    <div className='PostsForm'>

      <form onSubmit={onSubmit}>
        <input type='text' {...register("title")}/>
        <textarea {...register("body")}/>
        <input type="submit" />
      </form>
    </div>
  )
}
