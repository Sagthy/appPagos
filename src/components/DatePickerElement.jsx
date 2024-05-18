/* eslint-disable react/prop-types */
import DatePicker from 'react-datepicker'
import '../styles/DatePicker.css'

export function DatePickerElement ({ startDate, handleDateChange, openDatePicker, setOpenDatePicker }) {
  return (
    <div style={{ position: 'absolute' }}>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        open={openDatePicker}
        onCalendarClose={() => setOpenDatePicker(false)}
        onCalendarOpen={() => setOpenDatePicker(true)}
        onClickOutside={() => setOpenDatePicker(false)}
        customInput={<div />}
      />
    </div>
  )
}
