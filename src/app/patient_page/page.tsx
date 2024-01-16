'use client'
import { memo, useEffect, useState } from "react";
import Logo from "../components/logo";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function PatientPage() {

    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    useEffect(() => {
        const token = Cookies.get('jwt')

        if (token === null) {

            console.log('No token, redirecting to /provider_login');
            router.push('/patient_login');
        }

    }, []);
   

    const handleDateChange = (newDate: Date | null) => {
        setSelectedDate(newDate);
    };

    return (
        <div>
            <Logo />
            <h1 className="text-5xl p-5">Welcome:</h1>

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
