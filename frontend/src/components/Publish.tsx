import  { ChangeEvent, useState } from 'react'
import { Appbar } from './Appbar'
import axios from 'axios'
import { BACKGROUNG_URL } from '../config'
import { useNavigate } from 'react-router-dom'

function Publish() {
    const[title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const navigate = useNavigate()
    return (
        <div>
            <Appbar />
            <div className='flex justify-center w-full '>

                <div className='max-w-screen-lg w-full'>
                    <input onChange={(e)=>{
                        setTitle(e.target.value)
                    }} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-700 focus:border-blue-700  " placeholder="Write your Title here..."></input>
                    <TextEditor  onChange={(e)=>{
                        setContent(e.target.value)
                    }}/>
                    <button onClick={
                        async ()=>{
                           const response =  await axios.post(`${BACKGROUNG_URL}/api/v1/blog/crt`,{title:title,content:content},{headers:{
                            Authorization : localStorage.getItem("token")
                           }})
                           navigate(`/blog/${response.data.id}`)
                        }
                    }  className=" mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Publish post
                    </button>
                </div>


            </div>

            <div className='flex justify-center'>
                <div className='max-w-screen-lg w-full'>


                </div>
            </div>

        </div>
    )
}

export default Publish
function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}) {
    return (
        <div>

            <div>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50  border-2 mt-2">
                    <div className="flex items-center justify-between py-2 border-2">


                        <div id="tooltip-fullscreen" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
                            Show full screen
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                    <div className="px-4 py-2 bg-white rounded-b-lg ">
                        <label className="sr-only">Publish post</label>
                        <textarea onChange={onChange}  id="a"rows={8} className="block w-full px-2 text-sm text-gray-800 bg-white  outline-none" placeholder="Write an article..." required />
                    </div>

                </div>

            </div>
        </div>

    )
}

