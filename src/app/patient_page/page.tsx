'use client'
import { useState } from "react";
import Logo from "../components/logo";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

export default function PatientPage() {

    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const cookies = new Cookies()
    const token = cookies.get('jwt')
    console.log('Token:', token)

    const handleDateChange = (newDate: Date | null) => {
        setSelectedDate(newDate)
    }

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
                    <DateCalendar displayWeekNumber onChange={handleDateChange} />
                </LocalizationProvider>
            </div>
        );
    
}
