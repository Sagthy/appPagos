import DatePicker from 'react-datepicker';

export function DatePickerElement({ startDate, handleDateChange, openDatePicker, setOpenDatePicker, wrapperRef }) {
    return (
        <div ref={wrapperRef} style={{ position: 'absolute' }}>
            <label htmlFor="datePicker">Date Picker</label>
            <DatePicker
                id="datePicker"
                selected={startDate}
                onChange={handleDateChange}
                open={openDatePicker}
                onCalendarClose={() => setOpenDatePicker(false)}
                onCalendarOpen={() => setOpenDatePicker(true)}
                customInput={<div aria-label="Date Picker" />}
            />
        </div>
    );
}