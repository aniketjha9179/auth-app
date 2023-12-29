/* eslint-disable no-unused-vars */
/* eslint-disable */

import React from 'react'
import appwriteService from '../appwrite/config';
import  {Link} from 'react-router-dom'

const PostCard = ({$id,title, featuredImage}) => {
  return (
        <Link to={`/post/${$id}`}>
            <div className=' w-full bg-gray-200 rounded-xl  p-4 '>
                <div className=' w-full justify-center  mb-4'>
                   <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                   className=' rounded-xl'
                   />
                </div>
                <h2 className=' text-xl font-bold text-gray-600'>{title} </h2>
            </div>
        </Link>
    )
}

export default PostCard