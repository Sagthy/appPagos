
import { useState, useEffect, useRef } from 'react';
import { calculateDateDifference } from '../utils/dateUtils';

export function usePago(pago, mes) {
    const [checked, setChecked] = useState(localStorage.getItem(`checked-${mes}-${pago.nombre}`) === 'true');
    const [startDate, setStartDate] = useState(localStorage.getItem(`startDate-${mes}-${pago.nombre}`) ? new Date(localStorage.getItem(`startDate-${mes}-${pago.nombre}`)) : null);
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const wrapperRef = useRef(null);

    const handleChange = (checked) => {
        setChecked(checked);
        localStorage.setItem(`checked-${mes}-${pago.nombre}`, checked);
        if (checked) {
            setStartDate(null);
        }
    };

    const handleDateChange = (date) => {
        setStartDate(date);
        localStorage.setItem(`startDate-${mes}-${pago.nombre}`, date.toISOString());
        setOpenDatePicker(false);
    };

    const dateDifference = calculateDateDifference(startDate);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpenDatePicker(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const currentDate = new Date();
    const isPastDue = startDate && currentDate > startDate;

    return { checked, startDate, openDatePicker, wrapperRef, handleChange, handleDateChange, dateDifference, isPastDue, setOpenDatePicker };
}