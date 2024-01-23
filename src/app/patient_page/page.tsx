'use client'
import { SetStateAction, useEffect, useState } from "react"
import { Patient, UserRole } from "../utils/interface"
import Logo from "../components/logo"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { useRouter } from "next/navigation"

export default function PatientPage() {
    const [patients, setPatients] = useState<Patient[]>([])
    const [user, setUser] = useState<UserRole>()
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
            <Logo />
            <h1 className="text-5xl p-5">Welcome: { user?.role}</h1>
            {patients.map((patient, index) => (
                <div key={index} className="text-3xl">
                    {patient.name}
                </div>
            ))}
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
