'use client'
import { useEffect, useState } from "react"
import { UserRole } from "../utils/interface"
import Logo from "../components/logo"
import { useRouter } from "next/navigation"
import Navbar from "@/app/components/navbar"

export default function ProviderPage() {
    const [user, setUser] = useState<UserRole | null>(null)
    const router = useRouter()
    
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/current`, {
            method: "GET",
            credentials: "include"
        })
            .then((response) => response.json())
            .then((data: UserRole) => {
                setUser(data)
                if (!data) {
                    router.push("/")
                }
            })
            .catch((error) => {
                console.log("recieved error: ", error)
                router.push("/")
            })
    }, []) 

    return (
        <div>
            <Navbar username= {user ? user.username : ''}/>
            <Logo />
            <h1 className="text-5xl p-5">Welcome: { user?.username}</h1>
        </div>
    )
}
