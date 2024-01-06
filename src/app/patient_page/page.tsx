'use client'
import { useEffect, useState } from "react"
import { Patient } from "../utils/interface"
import Logo from "../components/logo"


export default function PatientPage() {

    const [patients, setPatients] = useState<Patient[]>([])

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`) // TODO: create api folder and move the fetch there
            .then(response => response.json())
            .then(data => setPatients(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <Logo />
            <h1 className="text-5xl p-5">Welcome:</h1>
            {patients.map((patient, index) => (
                <div key={index}
                    className="text-3xl ">
                    {patient.name}
                </div>
            ))}
        </div>
    )
}