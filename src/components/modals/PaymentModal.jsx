/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex
} from '@chakra-ui/react'

import { usePago } from '../../logic/usePago'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DatePickerElement } from '../DatePickerElement'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { StartDateElement } from '../StartDateElement'

const PaymentModal = ({ isOpen, onClose, paymentInfo, fechaVencimiento, mes }) => {
  const { nombre: name } = paymentInfo
  const { checked, paymentDate, openDatePicker, setOpenDatePicker, handleChangePaymentDate } = usePago(paymentInfo, mes)

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>

          <p>Fecha de vencimiento: {fechaVencimiento ? fechaVencimiento.toLocaleDateString() : 'No ingresada'}</p>
          <Flex gap='0.3rem'>

            <p>Fecha de pago: {paymentDate ? paymentDate.toLocaleDateString() : 'No ingresada'}</p>
            <div style={{ position: 'relative' }}>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setOpenDatePicker(!openDatePicker)
                }} aria-label='Open Date Picker'
              >
                <FontAwesomeIcon icon={faPencilAlt} />
              </button>
              {openDatePicker && <DatePickerElement startDate={paymentDate} handleDateChange={handleChangePaymentDate} openDatePicker={openDatePicker} setOpenDatePicker={setOpenDatePicker} />}
            </div>
            <StartDateElement checked={checked} startDate={paymentDate} />
          </Flex>

        </ModalBody>
        <ModalFooter>
          <Button colorScheme='red' onClick={onClose}>Cerrar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default PaymentModal
