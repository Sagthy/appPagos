/* eslint-disable react/prop-types */

import DatePicker from 'react-datepicker'
import '../styles/DatePicker.css'

export function DatePickerElement ({ startDate, handleDateChange, openDatePicker, setOpenDatePicker, wrapperRef }) {
  return (
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
  )
}
