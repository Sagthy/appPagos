import { useState, useEffect, useRef } from 'react';
import Switch from 'react-switch';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const pagosConst = [
    {
        nombre: 'Patente',
        mensual: false,
        meses: ['Enero'],
    },
    {
        nombre: 'Contribución',
        mensual: false,
        meses: ['Febrero']
    },
    {
        nombre: 'Seguro',
        mensual: false,
        meses: ['Octubre', 'Noviembre', 'Diciembre']
    },
    {
        nombre: 'Primaria',
        mensual: false,
        meses: ['Mayo', 'Agosto', 'Octubre']
    },
    {
        nombre: 'Universidad',
        mensual: true,
    },
    {
        nombre: 'UTE Salto',
        mensual: true,
    },
    {
        nombre: 'UTE Mdeo',
        mensual: true,
    },
    {
        nombre: 'OSE',
        mensual: true,
    },
    {
        nombre: 'Cardio',
        mensual: true,
    },
    {
        nombre: 'Gastos comunes Salto',
        mensual: true,
    },
    {
        nombre: 'Gastos comunes Mdeo',
        mensual: true,
    },
    {
        nombre: 'OCA',
        mensual: true,
    },
    {
        nombre: 'Cable',
        mensual: true,
    },
    {
        nombre: 'Netflix',
        mensual: true,
    },
    {
        nombre: 'Centro Médico',
        mensual: true,
    },
    {
        nombre: 'Veterinaria',
        mensual: true,
    },
    {
        nombre: 'Teléfono',
        mensual: true,
    },
    {
        nombre: 'Caja Profesional',
        mensual: true,
    },
    {
        nombre: 'Sereno',
        mensual: true,
    }
];

const calculateDateDifference = (startDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const diffTime = start - now; // removed Math.abs
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
};

const Pago = ({ pago }) => {
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
            <div style={{position: 'relative'}}>
                <button onClick={() => setOpenDatePicker(!openDatePicker)}>🖉</button>
                {openDatePicker && (
                    <div ref={wrapperRef} style={{position: 'absolute'}}>
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
            {!checked && startDate && <span>{startDate.toLocaleDateString()}</span>}
        </li>
    );
};

const Mes = ({ mes, pagos }) => {
    return (
        <div className='mes'>
            <h2>{mes}</h2>
            <ul>
                {pagos.map((pago, index) => (
                    (pago.mensual || pago.meses?.includes(mes)) && (
                        <Pago key={index} pago={pago} />
                    )
                ))}
            </ul>
        </div>
    );
};

const App = () => {
    const [indiceInicio, setIndiceInicio] = useState(new Date().getMonth());

    const mostrarMeses = () => {
        return meses.slice(indiceInicio, indiceInicio + 3).map((mes, index) => (
            <Mes key={index} mes={mes} pagos={pagosConst} />
        ));
    };

    const handleNextClick = () => {
        if (indiceInicio + 1 < meses.length - 2) {
            setIndiceInicio(indiceInicio + 1);
        }
    };

    const handlePreviousClick = () => {
        if (indiceInicio - 1 >= 0) {
            setIndiceInicio(indiceInicio - 1);
        }
    };

    return (
        <main>
            <h1>PAGOS PENDIENTES
                <br />💸💸💸💸<br />
            </h1>
            <button onClick={handlePreviousClick}>Anterior</button>
            <button onClick={handleNextClick}>Siguiente</button>
            <section className='mesesYPagos'>
                {mostrarMeses()}
            </section>
        </main>
    );
};

export default App;
