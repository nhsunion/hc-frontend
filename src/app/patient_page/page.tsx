'use client'
import { useEffect, useState } from "react"
import { UserRole } from "../utils/interface"
import Logo from "../components/logo"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { useRouter } from "next/navigation"
import Navbar from "@/app/components/navbar"

export default function PatientPage() {
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
            <Navbar username={user ? user.username : ''} />
            <Logo />
            <h1 className="text-5xl p-5">Welcome: {user?.username}</h1>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                localeText={{
                    calendarWeekNumberHeaderText: '#',
                    calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
                }}
            >
                <DateCalendar displayWeekNumber />
            </LocalizationProvider>
        </div>
    )
}
