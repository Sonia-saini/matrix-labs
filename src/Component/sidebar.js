

import React, { useEffect, useState } from 'react'
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
  Input,
  Heading,
  SimpleGrid,
  Button,
} from '@chakra-ui/react'
import {
  FiMenu,
} from 'react-icons/fi'
import Token from './token'
import PairAddress from './pairaddress'

import {RiFacebookBoxFill,RiLinkedinBoxLine,RiTwitterFill} from "react-icons/ri"
import Singledetail from './Singledetail'
import { Link } from 'react-scroll'

const LinkItems = [
  { name: 'Token Address' ,id:"token"},
  { name: 'Pair Address', id:"pair"}
]

export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [query,setQuery]=useState("");
  const [data,setData]=useState([]);
  let style={color:" var(--Cultured-Grey, #F7F9F9)",
    fontFamily:" Work Sans",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "28px"}
  useEffect(()=>{
    fetch(`https://api.dexscreener.com/latest/dex/search?q=${query}`)
    .then((res)=>res.json()).then((res)=>setData(res?.pairs.sort((a,b)=>Number(a.priceUsd)-Number(b.priceUsd)
    )));
    setQuery("")
  },[query])
  return (
    <Box minH="100vh" bgColor={"black"}>
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
 objectFit={'cover'}>
        {/* Content */}
        <Input _placeholder={{ fontWeight:"500",color:"white"}}placeholder='Search' m={"10"} ml="20"style={{width: "50%",mt:"500",color:"white",placeContent:"baseline",
// height: "50px",
flexShrink: 0,borderRadius: "20px", 
border: "1px solid #FFF",
background: "linear-gradient(95deg, rgba(124, 15, 53, 0.20) 4.79%, rgba(88, 18, 102, 0.20) 100%)"

}} onChange={(e)=>setQuery(e.target.value)}></Input>
<Button style={{color: "#FFF",
fontFamily: "Poppins",
fontSize: "16px",
fontStyle: "normal",
fontWeight: 600,
lineHeight: "normal",borderRadius: "20px",
background: "linear-gradient(95deg, #7C0F35 7.59%, #581266 104.01%)",width: "156px",
height: "52px",
flexShrink: 0
}}>Connect</Button>
{data.length>1&&<Box>
<Heading style={style} ml="10">Search Results</Heading>
    <SimpleGrid gap="10" columns={[1,2,3,4]} m="10">
{data.map((el)=>
<Singledetail props={el}/>
)}
    </SimpleGrid> 
</Box>}
        {data.length===0&&<Token/>}
       {data.length===0&& <PairAddress/>}
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
        <NavItem key={link.name} icon={link.icon} onClick={()=>onClose()}>
          {link.name}
        </NavItem>
      ))}
      <Box       mt="300"
      p="5" style={{display: "inline-flex",
      width:"100%",

      m:"20px 20px 20px 20px",
      height:"10%",
alignItems: "flex-start",
gap: "20px",borderRadius: "0px 32px 32px 0px",
background: "#292929"}}>
  <RiFacebookBoxFill color='#F30050' size={"24"}/>
  <RiLinkedinBoxLine  color='#F30050' size={"24"}/>
  <RiTwitterFill  color='#F30050' size={"30"}/>
</Box>
    </Box>
  )
}


const NavItem = ({ icon, children,id,onClose, ...rest }) => {
  console.log(onClose)
  return (
    <Box
      as="a"
      href="#"
      color={"white"}
      style={{ textDecoration: 'none' }}
     >
      <Link to={id} spy={true} smooth={true} offset={-15} duration={1000} onClick={onClose}>
      <Flex
       _active={{ backgroundColor:"#F30050" }}
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
      </Link>
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
      bg="gray"
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