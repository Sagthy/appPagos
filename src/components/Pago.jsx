/* eslint-disable react/prop-types */

import { usePago } from '../logic/usePago'
import { SwitchElement } from './SwitchElement'
import { DatePickerElement } from './DatePickerElement'
import { StartDateElement } from './StartDateElement'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import '../styles/Pago.css'
import PaymentModal from './modals/PaymentModal'
import { useDisclosure } from '@chakra-ui/react'

export function Pago ({ pago, mes }) {
  const { checked, startDate, openDatePicker, handleChange, handleDateChange, dateDifference, setOpenDatePicker } = usePago(pago, mes)

  let itemStyle = ''
  if (checked) {
    itemStyle = 'item-green'
  } else if (!startDate || dateDifference > 3) {
    itemStyle = 'item-gray'
  } else if (dateDifference < 0) {
    itemStyle = 'item-red'
  } else if (dateDifference <= 3) {
    itemStyle = 'item-orange'
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleItemClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onOpen()
  }

  return (
    <li className={itemStyle} onClick={handleItemClick}>
      <span>
        {pago.nombre}
        <SwitchElement checked={checked} handleChange={handleChange} />
        <div style={{ position: 'relative', padding: '0.2rem 0.4rem' }}>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setOpenDatePicker(!openDatePicker)
            }}
            aria-label='Open Date Picker'
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
          {openDatePicker && (
            <div
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <DatePickerElement
                startDate={startDate}
                handleDateChange={handleDateChange}
                openDatePicker={openDatePicker}
                setOpenDatePicker={setOpenDatePicker}
              />
            </div>
          )}
        </div>
      </span>
      <StartDateElement checked={checked} startDate={startDate} />
      <PaymentModal isOpen={isOpen} onClose={onClose} paymentInfo={pago} fechaVencimiento={startDate} mes={mes} checked={checked} />
    </li>
  )
}
