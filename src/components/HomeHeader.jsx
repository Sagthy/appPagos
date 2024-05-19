import { Flex, Heading, Text, IconButton, useDisclosure } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import AddNewItemModal from './modals/AddNewItemModal'

const HomeHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex flexDirection='column' alignItems='center' justifyContent='center'>
      <Heading color='white' padding='1rem' size='2xl' textAlign='center'>
        PAGOS PENDIENTES
      </Heading>
      <Text fontSize='2.3rem' marginBottom='1rem'> 💸💸💸💸 </Text>
      <IconButton aria-label='Add Items' color='white' colorScheme='red' rounded='full' fontWeight='bold' icon={<AddIcon boxSize='1.2rem' />} onClick={onOpen} />
      <AddNewItemModal isOpen={isOpen} onClose={onClose} />
    </Flex>

  )
}

export default HomeHeader
