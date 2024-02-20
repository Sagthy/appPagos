import { useState, useEffect, useRef } from 'react';
import { calculateDateDifference } from '../utils/dateUtils';
import Switch from 'react-switch';
import DatePicker from 'react-datepicker';

export function Pago ({ pago, mes }) {
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

    let itemStyle = {};
    if (checked) {
        itemStyle.backgroundColor = 'green';
    } else if (!startDate || dateDifference > 3) {
        itemStyle.backgroundColor = 'gray';
    } else if (dateDifference <= 0) {
        itemStyle.backgroundColor = 'red';
    } else if (dateDifference <= 3) {
        itemStyle.backgroundColor = 'orange';
    }

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

    return (
        <li style={itemStyle}>
            <span>
                {pago.nombre}
                <div className="switch-wrapper">
                    <Switch onChange={handleChange} checked={checked} />
                </div>
                <div style={{ position: 'relative' }}>
                    <button onClick={() => setOpenDatePicker(!openDatePicker)}>🖉</button>
                    {openDatePicker && (
                        <div ref={wrapperRef} style={{ position: 'absolute' }}>
                            <DatePicker
                                selected={startDate}
                                onChange={handleDateChange}
                                open={openDatePicker}
                                onCalendarClose={() => setOpenDatePicker(false)}
                                onCalendarOpen={() => setOpenDatePicker(true)}
                                customInput={<div />}
                            />
                        </div>
                    )}
                </div>

            </span>
            {!checked && startDate && <span>{startDate.toLocaleDateString()}</span>}
        </li>
    );
}