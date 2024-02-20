import { useState, useEffect, useRef } from 'react';
import { calculateDateDifference } from '../utils/dateUtils';

export const Pago = ({ pago }) => {
    const [checked, setChecked] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const wrapperRef = useRef(null);

    const handleChange = (checked) => {
        setChecked(checked);
        if (checked) {
            setStartDate(null);
        }
    };

    const handleDateChange = (date) => {
        setStartDate(date);
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
            {pago.nombre}
            <div className="switch-wrapper">
                <Switch onChange={handleChange} checked={checked} />
            </div>
            <div style={{position: 'relative'}}> {/* Contenedor agregado */}
                <button onClick={() => setOpenDatePicker(!openDatePicker)}>🖉</button>
                {openDatePicker && (
                    <div ref={wrapperRef} style={{position: 'absolute'}}> {/* Posición absoluta agregada */}
                        <DatePicker 
                            selected={startDate} 
                            onChange={handleDateChange} 
                            open={openDatePicker}
                            onCalendarClose={() => setOpenDatePicker(false)}
                            onCalendarOpen={() => setOpenDatePicker(true)}
                            customInput={<div />} // Aquí está el cambio
                        />
                    </div>
                )}
            </div>
            {!checked && startDate && <span>{startDate.toLocaleDateString()}</span>}
        </li>
    );
};