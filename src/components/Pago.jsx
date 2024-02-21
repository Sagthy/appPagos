import { usePago } from '../logic/usePago';
import { SwitchElement } from './SwitchElement';
import { DatePickerElement } from './DatePickerElement';
import { StartDateElement } from './StartDateElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Pago.css';

export function Pago({ pago, mes }) {
    const { checked, startDate, openDatePicker, wrapperRef, handleChange, handleDateChange, dateDifference, isPastDue, setOpenDatePicker } = usePago(pago, mes);

    let itemStyle = '';
    if (checked) {
        itemStyle = 'item-green';
    } else if (!startDate || dateDifference > 3) {
        itemStyle = 'item-gray';
    } else if (dateDifference <= 0) {
        itemStyle = 'item-red';
    } else if (dateDifference <= 3) {
        itemStyle = 'item-orange';
    }

    return (
        <li className={itemStyle}>
            <span>
                {pago.nombre}
                {!isPastDue && <SwitchElement checked={checked} handleChange={handleChange} />}
                <div style={{ position: 'relative' }}>
                    <button onClick={() => setOpenDatePicker(!openDatePicker)}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </button>
                    {openDatePicker && <DatePickerElement startDate={startDate} handleDateChange={handleDateChange} openDatePicker={openDatePicker} setOpenDatePicker={setOpenDatePicker} wrapperRef={wrapperRef} />}
                </div>
            </span>
            <StartDateElement checked={checked} startDate={startDate} />
        </li>
    );
}