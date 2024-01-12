'use client'
import { Button } from "@mui/material"
import Link from "next/link"
import { button_style } from "../../utils/Styling"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"


export default function RegisterForm() {
    const router = useRouter()
  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register`, {
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        password: password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      credentials: 'include'
    })

    if (res.status === 200) {
      const token = await res.json()
      router.push('/login')
    }
    else {
      alert("Error")
    }
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input
                        type="text"
                        onChange={e => setFullName(e.target.value)}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Full Name" />
                    <input
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Email" />
                    <input
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Password" />
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Confirm Password" />
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        style={button_style}
                        className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</Button>
                </div>
                <div className="text-grey-dark mt-6">
                    Already have an account?
                    <Link className="no-underline border-b border-blue text-blue" href="/login">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
    )
}
}