import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { View, Image, Text } from '@aws-amplify/ui-react';


export default function Btn(props) {
  const { overrides, ...rest } = props;

  return (
  <View
    width="162px"
    height="40px"
    display="block"
    position="relative"
    {...getOverrideProps(overrides, "Btn")}
    {...rest}
  >
    <View
      width="162px"
      height="40px"
      display="block"
      position="absolute"
      top="0%"
      bottom="0%"
      left="0%"
      right="0%"
      backgroundColor="rgba(217,217,217,1)"
      {...getOverrideProps(overrides, "Rectangle 40")}
    />
    <Image
      width="9.26%"
      height="32.5%"
      display="block"
      position="absolute"
      top="32.5%"
      bottom="35%"
      left="82.72%"
      right="8.02%"
      objectFit="cover"
      alt=""
      {...getOverrideProps(overrides, "image 18")}
    />
    <Text
      fontFamily="Inter"
      fontSize="10px"
      fontWeight="400"
      color="rgba(28,28,28,1)"
      lineHeight="12.102272033691406px"
      textAlign="left"
      display="block"
      letterSpacing="0.35px"
      width="68px"
      height="11px"
      position="absolute"
      top="35%"
      bottom="37.5%"
      left="7.41%"
      right="50.62%"
      whiteSpace="pre-wrap"
      {...getOverrideProps(overrides, "Quick Play")}
    >
      Quick Play        
    </Text>
  </View>
  )
}
