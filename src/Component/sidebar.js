

import React from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react'
import {
  FiMenu,
} from 'react-icons/fi'
import Token from './token'
import PairAddress from './pairaddress'



const LinkItems = [
  { name: 'Token Address' ,href:"/token"},
  { name: 'Pair Address', href:"/pair"}
]

export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={"black"}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4" h="90%"  backgroundImage="url('https://s3-alpha-sig.figma.com/img/51fd/bd7c/3cb3d57b1898d0d4ca08cb43c3373b86?Expires=1694995200&Signature=FgEQJXqSeWCSggLpMHN6oTptm~t8iko7FjD4qT-IYhUJbLl~loutJ~QgfIoKZ6mdto6ee8cEqTi4xR7cSEDySNAf6zVEt3gVpJdEjdO11dgEjyEPhbPx5ZRDFcw9ywFlUp60Vv77CxBqAGpWFZpqHLnoW~DrgPcPInzFeMkxs4lJxDlelUh5mWD9ZS81CoYydvpyvSaKmeLWRaSQw31cbfq6wVXBe9fMsq4Lw8i3YqJvWfmjN6T5vD72335y8YjroMcDFvgDpUlnEcryqmtxLSWzJ4Ob5G0riFWGlZ4y5YdnDQwFmy68RFnDAACGJg8HV4D98vI6uYYQkHg4FtHDUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
  width="-moz-fit-content"
  height= "800"
  backgroundColor= "lightgray 50%" objectFit={'cover'}>
        {/* Content */}
        <Token/>
        <PairAddress/>
      </Box>
    </Box>
  )
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={'#292929'}
      borderRadius= "0px 32px 32px 0px"
     isOpen={{bgColor: '#F30050'}}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text color="rgba(255, 255, 255, 0.70)"
fontFamily= "Pacifico"
fontSize="32px"
fontStyle= "normal"
fontWeight="400"
lineHeight="normal">
        NFTify
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} color="white"/>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      color={"white"}
      style={{ textDecoration: 'none' }}
      _focus={{ color: '#F30050',background:"#F30050" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />


        <Text color="rgba(255, 255, 255, 0.70)"
fontFamily= "Pacifico"
fontSize="32px"
fontStyle= "normal"
fontWeight="400"
lineHeight="normal">
        NFTify
        </Text>
    </Flex>
  )
}