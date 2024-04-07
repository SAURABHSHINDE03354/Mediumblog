import { Link } from "react-router-dom";

interface BlogCardType{
    id:string;
    authorName:string;
    title:string;
    content :string;
    publishedDate:string;

}
export function BlogCard({authorName,title,content,publishedDate,id}:BlogCardType) {
  return (
    <Link to={`/blog/${id}`}>
    <div className='p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer'>
      <div className='flex '>
        <div className='flex justify-center flex-co-1 text-sm'>
        <Avatar name={authorName}/>
        </div>
        
        <div className='font-extralight pl-2'>{authorName}</div>
        <div className='flex justify-center flex-col pl-2'>
            <Circle/>
        </div>
        
        <div className='flex justify-center flex-col pl-2 font-light text-slate-500 text-sm'>{publishedDate}</div>
      </div>
      <div className='flex justify-center flex-col  text-xl font-semibold pt-2'>
        {title}
      </div>
      <div className='text-md font-thin'>
        {content.slice(0,100)+"..."}

      </div>
      <div className='w-full text-slate-400 font-thin pt-2'>
        {`${Math.ceil(content.length/100)}minute(s) read`}
      </div>
      <div className='bg-slate h-1 w-full'></div>
    </div>
    </Link>
  )
}
function Circle(){
    return <div className='w-1 h-1 rounded-full bg-slate-400 '>

    </div>
}

export function Avatar({name,size="small"}:{name:string,size?:"small"|"big"}){
    return (<div className={`relative inline-flex items-center justify-center ${size==="small"?"w-6 h-6":"w-10 h-10"}  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-800`}>
    <span className={`${size==="small"?"font-xl":"font-2xl" } font-normal text-gray-600 dark:text-gray-300 `}style={{height:'25px'}}>{name[0]}</span>
</div>)

}
 
