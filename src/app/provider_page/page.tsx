'use client'
import { SetStateAction, useEffect, useState } from "react"
import { Patient } from "../utils/interface"
import Logo from "../components/logo"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

export default function ProviderPage() {
    const [patients, setPatients] = useState<Patient[]>([])
    
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/current`) // TODO: create api folder and move the fetch there
            .then(response => response.json())
            .then(data => setPatients(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <Logo />
            <h1 className="text-5xl p-5">Welcome:</h1>
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
