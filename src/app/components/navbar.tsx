'use client'
import { AppBar, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NavBarProps } from '../utils/interface'

export default function NavBar({
    currentPath,
}: NavBarProps) {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {/* Empty to push the Link to right */}
                </Typography>
                <Typography variant="h6">
                    {currentPath === '/patient_login' ? (
                        <Link href="/provider_login">Provider Login</Link>
                    ) : (
                        <Link href="/patient_login">Patient Login</Link>
                    )}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}