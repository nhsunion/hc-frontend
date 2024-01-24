'use client'
import { FormEvent, SetStateAction, useEffect, useState } from "react"
import { Patient, UserRole, Appointment } from "../utils/interface"
import Logo from "../components/logo"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { useRouter } from "next/navigation"
import Navbar from "@/app/components/navbar"



export default function PatientPage() {
    const [user, setUser] = useState<UserRole | null>(null)
    const router = useRouter()

    const AppointmentsList = () => {
        const [appointments, setAppointments] = useState([]);

        const fetchAppointments = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/available`)
                if (response.ok) {
                    const data = await response.json();
                    setAppointments(data);
                } else {
                    console.error('Error fetching appointments:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        }

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

            fetchAppointments();
        }, [])


        return (
            <div>
                <Logo />
                <h1 className="text-5xl p-5">Welcome: {user?.role}</h1>
                
                <div>
                    <h1>Available Appointments</h1>
                    <button onClick={fetchAppointments}>Fetch Appointments</button>
                    <ul>
                        {appointments.map((appointment: Appointment) => (
                            <li key={appointment.id}>
                                {`Date: ${appointment.date}, Provider: ${appointment.providerName}`}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
