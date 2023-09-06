import { Box, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Singledetail from './Singledetail';

export default function PairAddress() {
let [data,setData]=useState([]);
useEffect(()=>{
fetch(`https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae`)
.then((res)=>res.json()).then((res)=>setData(res?.pairs.sort((a,b)=>Number(a.priceUsd)-Number(b.priceUsd)
)));

console.log(data)
// setData(dat)
},[])
let style={
    // color:" var(--Cultured-Grey, #F7F9F9)",
    fontFamily:" Work Sans",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "28px"}
  return (
   <Box id="pair"> <Heading style={style} ml="10">Pair Address</Heading>
    <SimpleGrid gap="10" m="10" columns={[1,2,3,4]}>
{data&&data.map((el)=>
<Singledetail props={el}/>
)}
    </SimpleGrid></Box>
  )
}

