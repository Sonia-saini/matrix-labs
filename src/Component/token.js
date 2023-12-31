import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Singledetail from "./Singledetail";

function Token() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`
    )
      .then((res) => res.json())
      .then((res) =>
        setData(
          res?.pairs.sort((a, b) => Number(a.priceUsd) - Number(b.priceUsd))
        )
      );

    console.log(data);
  }, []);
  let style = {
    color: " var(--Cultured-Grey, #F7F9F9)",
    fontFamily: " Work Sans",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "28px",
  };
  return (
    <Box id="token">
      {" "}
      <Heading style={style} ml="10">
        Token Search Results
      </Heading>
      <SimpleGrid gap="10" columns={[1, 2, 2, 4]} m="10">
        {data && data.map((el) => <Singledetail props={el} />)}
      </SimpleGrid>
    </Box>
  );
}

export default Token;
