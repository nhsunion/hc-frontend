'use client'
import { Button } from "@mui/material"
import Link from "next/link"
import { button_style } from "../utils/styling"

export default function RegisterForm() {
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Full Name" />
                    <select
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        
                    >
                        <option value="" disabled>Select Proffestion</option>
                        <option value="District nurse">District nurse</option>
                        <option value="Physiotherapist">Physiotherapist</option>
                        <option value="Curator">Curator</option>
                        <option value="Doctor">Doctor - specialist in general medicine</option>
                        <option value="Midwife">Midwife</option>
                        <option value="Psychologist">Psychologist</option>
                        <option value="Curator">Curator</option>
                        <option value="BVC nurse">BVC nurse</option>
                        <option value="Occupational therapist">Occupational therapist</option>
                    </select>
                    <input
                        type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Email" />
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Password" />
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Confirm Password" />
                    <Button
                        variant="contained"
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