'use client'
import { useEffect, useState } from "react"
import { GetPatient } from "../api/patient/route"
import { Patient } from "../utils/interface"
import Logo from "../components/logo"


export default function PatientPage() {

    const [patients, setPatients] = useState<Patient[]>([])

    useEffect(() => {
        GetPatient('/api/login')
            .then(data => {
                setPatients(data)
            })
            .catch((err) => {
                console.log(err)
            })

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