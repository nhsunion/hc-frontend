

export interface Patient {
    id: number
    name: string
    title: string
    email: string
    phone: string
    address: string
    username: string
}

export interface Provider {
    id: number
    name: string
    title: string
    email: string
    phone: string
    address: string
    username: string
}

export interface NavBarProps {
    username: string
}

export interface UserRole{
    id: number
    role: string
    username: string
}

export interface Appointment {
    id: number
    date: Date
    patientId?: number
    patientName: string
    providerId: number
    providerName: string
}