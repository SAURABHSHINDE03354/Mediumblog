

function Blogskeleton() {
  return (
    <div className=" animate-pulse">
         <div className='p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-lg cursor-pointer  '>
      <div className='flex '>
        <div className='flex justify-center flex-co-1 text-sm'>
        <div className="h-2 bg-gray-200 rounded-full  max-w-screen-lg mb-2.5"></div>
        </div>
        
        <div className="h-2 bg-gray-200 rounded-full  max-w-[460px] mb-2.5"></div>
        <div className='flex justify-center flex-col pl-2'>
        <div className="h-2 bg-gray-200 rounded-full  max-w-[460px] mb-2.5"></div>
        </div>
        
        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>      </div>
      <div className='flex justify-center flex-col  text-xl font-semibold pt-2'>
      <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
      </div>
      <div className='text-md font-thin'>
      <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>

      </div>
      <div className='w-full text-slate-400 font-thin pt-2'>
      <div className="h-2 bg-gray-200 rounded-full  max-w-[500px] mb-2.5"></div>
      <span className="sr-only">Loading...</span>
      </div>
      <div className='bg-slate h-1 w-full'></div>
    </div>
        
{/* {<div role="status" className="max-w-sm animate-pulse">
    <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
    <span className="sr-only">Loading...</span>
</div>} */}


      
    </div>
  )
}

export default Blogskeleton
