'use client'
import Link from "next/link"
import Image from "next/image"


export default function Logo() {
    return (
        <Link
            href="/login"
        >
            <Image
                className="mr-2"
                src="/hclogo.png"
                alt="logo"
                width={290}
                height={400}
            />
        </Link>
    )
}