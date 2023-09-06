import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Singledetail({ props }) {
  return (
 <>  <Grid
      // width="279px"
      p="10"
      height="188px"
      flexShrink="0"
      borderRadius="10px"
      background="#390554"
    >
      <Heading
        style={{
          color: "#FFF",
          fontFamily: "Poppins",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
        }}
      >
        Basic Info
      </Heading>

      <Flex gap="15">
        {" "}
        <Text
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >
          Pair created at </Text><Text  style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}>{props.pairCreatedAt}{" "}
        </Text>
      </Flex>
      <Flex gap="5">
        {" "}
        <Text
          style={{
            color: "#F5F5F5",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >
          Symbol
        </Text>

        <Text
          style={{
            color: "#F5F5F5",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}
        >
          {props.baseToken.symbol}{" "}
        </Text>
      </Flex>
      <Flex gap="5">
        {" "}
        <Text
          style={{
            color: "#F5F5F5",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}
        >
          Dex ID{" "}
        </Text>
        <Text
          style={{
            color: "#F5F5F5",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}
        >
          {props.dexId}{" "}
        </Text>
      </Flex>
      <Flex gap="5">
        {" "}
        <Text
          style={{
            color: "#F5F5F5",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >
          Pair Address
        </Text>
        <Text
          style={{
            color: "#F5F5F5",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}
        >
          {" "}
          {props?.pairAddress.substring(0,5)}{" "}
        </Text>
      </Flex>
    </Grid>
    <Grid
      // width="279px"
      p="10"
      height="188px"
      flexShrink="0"
      borderRadius="10px"
      background="#390554"
    >
      <Heading
        style={{
          color: "#FFF",
          fontFamily: "Poppins",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
        }}
      >
        Basic Token
      </Heading>

      <Flex gap="15">
        {" "}
        <Text
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >Name
            </Text>
           <Text           style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}>{props.baseToken.name}{" "}
        </Text>
      </Flex>
      <Flex gap="15">
        {" "}
        <Text
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >
          Address  </Text>
           <Text           style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}>{props.baseToken.address.substring(0,5)}{" "}
        </Text>
      </Flex>
      <Flex gap="15">
        {" "}
        <Text
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        > Symbol
            </Text>
          <Text           style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}>{props.baseToken.symbol}{" "}
        </Text>
      </Flex>
    </Grid>
    <Grid
      // width="279px"
      p="10"
      height="188px"
      flexShrink="0"
      borderRadius="10px"
      background="#390554"
    >
      <Heading
        style={{
          color: "#FFF",
          fontFamily: "Poppins",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
        }}
      >
        Quote Token
      </Heading>

      <Flex gap="15">
        {" "}
        <Text
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >Name
            </Text>
           <Text           style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}>{props.quoteToken.name}{" "}
        </Text>
      </Flex>
      <Flex gap="15">
        {" "}
        <Text
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >
          Address  </Text>
           <Text           style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}>{props.quoteToken.address.substring(0,5)}{" "}
        </Text>
      </Flex>
      <Flex gap="15">
        {" "}
        <Text
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        > Symbol
            </Text>
          <Text           style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}>{props.quoteToken.symbol}{" "}
        </Text>
      </Flex>
    </Grid>
    <Grid
      // width="279px"
      p="10"
      height="188px"
      flexShrink="0"
      borderRadius="10px"
      background="#390554"
    >
      <Heading
        style={{
          color: "#FFF",
          fontFamily: "Poppins",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
        }}
      >
        Price
      </Heading>

      <Flex gap="15">
        {" "}
        <Text
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >Price Native
            </Text>
           <Text           style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}>{props.priceNative}{" "}
        </Text>
      </Flex>
      <Flex gap="15">
        {" "}
        <Text
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >
          Price USD  </Text>
           <Text           style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}>{props.priceUsd}{" "}
        </Text>
      </Flex>
    </Grid>
    </> 

  );
}

export default Singledetail;
