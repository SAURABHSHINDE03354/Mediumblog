import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@100xdevs/medium-common";
import axios from "axios";
import { BACKGROUNG_URL } from "../config";

export default function Auth({ type }: { type: "signup" | "signin" }) {
    const navigate = useNavigate()
    const [postInputs, setpostInputs] = useState<SignupInput>({
        name: " ",
        username: " ",
        password: " "
    })
    async function sendrequest() {
        try {
        const response = await axios.post(`${BACKGROUNG_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postInputs)
        const jwt = response.data.jwt;
        localStorage.setItem("token",jwt);
        navigate("/blogs")

    } catch (error) {
        
    }
        
    }
    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div >
                    <div className="px-10">
                        <div className="text-3xl  font-extrabold ">
                            Create an account
                        </div>
                        <div className="text-slate-500">
                            {type ==="signup"? "Already have an account?":"You don't  have an account?"}
                            <Link className="pl-2 underline " to={type==="signup"?'/signin':'/signup'}>{type === "signup"?"Login" :"Sign Up"}</Link>
                        </div>
                    </div>

                    <div className="py-5">
                        {type==="signup"&&<LabelleedInput label="Name" placeholder="saurabh ..." onChange={(e) => {
                            setpostInputs({
                                ...postInputs,
                                name: e.target.value
                            })
                        }} />}
                        <LabelleedInput label="Username" placeholder="saurabh ..." onChange={(e) => {
                            setpostInputs({
                                ...postInputs,
                                username: e.target.value
                            })
                        }} />
                        <LabelleedInput label="Password" type={"password"} placeholder="1345" onChange={(e) => {
                            setpostInputs({
                                ...postInputs,
                                password: e.target.value
                            })
                        }} />
                        <button onClick={sendrequest} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? 'Sign Up' : "Sign In"}</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

interface LabelledInputType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

export function LabelleedInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-black pt-2">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-400 text-gray-1000 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
    </div>
}
