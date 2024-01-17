'use client'
import Logo from "../components/logo"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

export default function PatientPage() {


    return (
        <div>
            <Logo />
            <h1 className="text-5xl p-5">Welcome!</h1>

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
