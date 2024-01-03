/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <>
              {/* <div className=" flex  justify-between item w-[50%] py-8 mt-4 text-center bg-red-400  h-screen">
              
                
            </div> */}
                <div className="flex h-screen">
      {/* Red part with 1/2 width */}
      <div className="w-1/2 bg-red-500">
      <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full h-10">
                            <h1 className="  text-2xl font-bold text-black  hover:text-pink-500">
                                <Link to={'/login'}>
                                Login to read posts
                                </Link>
                                its a simple blogs writing project

                            </h1>
                        </div>
                    </div>
                </Container>
        <div className="p-4">
          {/* Your content goes here */}
        </div>
      </div>

      {/* Blue part with 1/2 width */}
      <div className="w-1/2 bg-blue-500">
        {/* Content for the blue part */}
        <div className="p-4">
          {/* Your content goes here */}
          <p className="text-white">Blue Part</p>
        </div>
      </div>
    </div>
          
    
           
            </>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home