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
  FormControl,
  FormLabel,
  Input,
  Menu,
  Checkbox,
  MenuList,
  MenuItem,
  MenuButton,
  Text
} from '@chakra-ui/react'

import { useItems } from '../../states/ItemsContext'
import { useState } from 'react'

const NewItemModal = ({ isOpen, onClose }) => {
  const { addItem } = useItems()
  const [nombre, setName] = useState('')
  const [meses, setMeses] = useState([])
  const [error, setError] = useState('')

  const handleMonthChange = (e) => {
    const value = e.target.value
    if (value === 'mensual') {
      if (e.target.checked) {
        setMeses('mensual')
      } else {
        setMeses([])
      }
    } else {
      if (e.target.checked) {
        setMeses(prev => prev.includes('mensual') ? [value] : [...prev, value])
      } else {
        setMeses(prev => prev.filter(m => m !== value))
      }
    }
  }

  const handleSave = () => {
    if (!nombre.trim()) {
      setError('El nombre no puede estar vacío.')
      return
    }

    if (meses.length === 0) {
      setError('Debes seleccionar al menos un mes.')
      return
    }

    setError('')
    addItem({ nombre, meses })
    onClose()
  }

  const isMonthlySelected = meses.includes('mensual')

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Agregar un nuevo pago</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={!!error && !nombre.trim()}>
            <FormLabel>Nombre</FormLabel>
            <Input
              onChange={(e) => {
                setName(e.target.value)
                if (error) setError('')
              }}
              type='text'
              value={nombre}
            />
          </FormControl>

          <Menu closeOnSelect={false} overflow='scroll'>
            <MenuButton as={Button} colorScheme='blue'>
              Selecciona los meses
            </MenuButton>
            <MenuList overflowY='scroll' height='40vh'>
              <MenuItem>
                <Checkbox
                  size='lg'
                  onChange={handleMonthChange}
                  value='mensual'
                  isChecked={meses.includes('mensual')}
                >
                  Mensual
                </Checkbox>
              </MenuItem>
              {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map((month) => (
                <MenuItem key={month}>
                  <Checkbox
                    size='lg'
                    onChange={handleMonthChange}
                    value={month}
                    isChecked={meses.includes(month)}
                    isDisabled={isMonthlySelected}
                  >
                    {month}
                  </Checkbox>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          {(!nombre.trim() || !meses.length) && error && (
            <Text color='red.500' mt={2}>{error}</Text>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' onClick={handleSave}>Guardar</Button>
          <Button colorScheme='red' onClick={onClose}>Cerrar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default NewItemModal
