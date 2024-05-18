/* eslint-disable no-redeclare */
/* global localStorage */
import { useState } from 'react'
import { calculateDateDifference } from '../utils/dateUtils'

export function usePago (pago, mes) {
  const [checked, setChecked] = useState(localStorage.getItem(`checked-${mes}-${pago.nombre}`) === 'true')
  const [startDate, setStartDate] = useState(localStorage.getItem(`startDate-${mes}-${pago.nombre}`) ? new Date(localStorage.getItem(`startDate-${mes}-${pago.nombre}`)) : null)
  const [openDatePicker, setOpenDatePicker] = useState(false)
  const [paymentDate, setPaymentDate] = useState(localStorage.getItem(`paymentDate-${mes}-${pago.nombre}`) ? new Date(localStorage.getItem(`paymentDate-${mes}-${pago.nombre}`)) : null)

  const handleChangePaymentDate = (date) => {
    setPaymentDate(date)
    localStorage.setItem(`paymentDate-${mes}-${pago.nombre}`, date.toISOString())
  }


  const handleChange = (checked) => {
    setChecked(checked)
    localStorage.setItem(`checked-${mes}-${pago.nombre}`, checked)
    if (checked) {
      setStartDate(null)
      localStorage.removeItem(`startDate-${mes}-${pago.nombre}`) 
    }
  }

  const handleDateChange = (date) => {
    setStartDate(date)
    localStorage.setItem(`startDate-${mes}-${pago.nombre}`, date.toISOString())
    setOpenDatePicker(false)
  }

  const dateDifference = calculateDateDifference(startDate)


  return { checked, startDate, openDatePicker, handleChange, handleDateChange, dateDifference, setOpenDatePicker, paymentDate, handleChangePaymentDate}
}
