import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { View, Text } from '@aws-amplify/ui-react';


export default function PhotoText(props) {
  const { overrides, ...rest } = props;

  return (
  <View
    width="484px"
    height="354px"
    display="block"
    position="relative"
    {...getOverrideProps(overrides, "PhotoText")}
    {...rest}
  >
    <View
      width="484px"
      height="338px"
      display="block"
      position="absolute"
      top="0%"
      bottom="4.52%"
      left="0%"
      right="0%"
      backgroundColor="rgba(217,217,217,1)"
      {...getOverrideProps(overrides, "Rectangle 42")}
    />
    <View
      width="484px"
      height="16px"
      display="block"
      position="absolute"
      top="95.48%"
      bottom="0%"
      left="0%"
      right="0%"
      {...getOverrideProps(overrides, "textarea")}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="500"
        color="rgba(205,205,205,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        width="44px"
        height="16px"
        position="absolute"
        top="2112.5%"
        bottom="-2112.5%"
        left="0%"
        right="90.91%"
        whiteSpace="pre-wrap"
        {...getOverrideProps(overrides, "Lorem")}
      >
        Lorem

      </Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="300"
        color="rgba(205,205,205,0.8)"
        lineHeight="12.102272033691406px"
        textAlign="right"
        display="block"
        width="108px"
        height="15px"
        position="absolute"
        top="2112.5%"
        bottom="-2106.25%"
        left="77.69%"
        right="0%"
        whiteSpace="pre-wrap"
        {...getOverrideProps(overrides, "Lorem ipsum dolor")}
      >
        Lorem ipsum dolor
      </Text>
    </View>
  </View>
  )
}
