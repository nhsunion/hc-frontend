'use client'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { NavBarProps } from '../utils/interface'

export default function NavBar({ username}: NavBarProps) {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {username}
                </Typography>
                <Typography variant="h6">
                    {<a href="/">Logout</a>}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}