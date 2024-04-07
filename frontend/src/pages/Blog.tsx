import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { Appbar } from "../components/Appbar";
import { Avatar } from "../components/BlogCard";
import Blogskeleton from "../components/Blogskeleton";


export default function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });
  if (loading) {
    return <div>
      <div><Appbar/></div>
      <div className="flex justify-center">
        <div>
        <Blogskeleton/>
        <Blogskeleton/>
        </div></div>
      </div>
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center pt-12">

        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-6xl">
          <div className=" col-span-8">
            <div className="text-5xl font-extrabold">{blog?.title}</div>
            <div className="text-sslate-500">Posted on @nd 2024</div>
            <div>{blog?.content}</div>
          </div>
          <div className="grid col-span-4">
            <div className="">Author</div>

            <div className="flex w-full">
              <div className=" flex flex-col justify-center">

              <Avatar name={blog?.author.name||"S"} size="big"/>
              </div>
              <div className="pl-2 justify-center">

                <div className=" text-xl font-bold text-slate-500"> {blog?.author.name}</div>
                <div>random catch phrase about the author</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
