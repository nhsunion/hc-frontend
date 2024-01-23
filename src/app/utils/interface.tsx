

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
    role: string
    username: string
}