import React, {useState, useEffect} from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'

function AllPosts
() {
    const [post , setPost] = useState([])

    useEffect(() => {
        service.getPosts([]).then((post) => {
        if (post) {
            setPost(post.documents)
        }
        })
    }, [])
     
    
  return (
  
    <div className='w-full py-8'>
        <Container>
            {post.length > 0 ? <div className='flex flex-wrap'>
                {post.map((post) => (
                    <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <PostCard {...post} />
                    </div>
                )
                )}
            
            </div>
            : <p className="text-2xl font-bold hover:text-gray-500"
              >Here no post available. Add posts...</p> }
        </Container>
    </div> 
  )
}

export default AllPosts
