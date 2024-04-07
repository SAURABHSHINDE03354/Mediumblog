
import { BlogCard } from '../components/BlogCard'
import { Appbar } from '../components/Appbar'
import { useBlogs } from '../hooks'
import Blogskeleton from '../components/Blogskeleton'

function Blogs() {
    const { loading, blogs } = useBlogs()
    if (loading) {
        return (
            <div>
                <Appbar/>
                <div className='flex justify-center'>

                    <div>
                        <Blogskeleton />
                        <Blogskeleton />
                        <Blogskeleton />
                        <Blogskeleton />
                        <Blogskeleton />
                    </div>
                </div>
            </div>)
    }
    return (
        <div>
            <Appbar />
            <div className='flex justify-center'>

                <div >

                    {blogs.map((blog) => <BlogCard authorName={blog.author.name} title={blog.title}
                        content={blog.content}
                        publishedDate='6th april 2024'
                        id={blog.id} />

                    )}

                </div>
            </div>
        </div>


    )
}

export default Blogs
