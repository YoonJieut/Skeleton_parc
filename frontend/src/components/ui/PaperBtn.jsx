import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { View, Icon, Image, Text } from '@aws-amplify/ui-react';


export default function PaperBtn(props) {
  const { overrides, ...rest } = props;

  return (
  <View
    width="162px"
    height="40px"
    display="block"
    position="relative"
    {...getOverrideProps(overrides, "PaperBtn")}
    {...rest}
  >
    <Icon
      width="162px"
      height="40px"
      viewBox={{"minX":0,"minY":0,"width":162,"height":40}}
      paths={[{"d":"M 0 0 L 162 0 L 162 40 L 0 40 L 0 0 Z","fillRule":"nonzero"},{"d":"M0 0 L0 -1 L-1 -1 L-1 0 L0 0 Z M162 0 L163 0 L163 -1 L162 -1 L162 0 Z M162 40 L162 41 L163 41 L163 40 L162 40 Z M0 40 L-1 40 L-1 41 L0 41 L0 40 Z M0 1 L162 1 L162 -1 L0 -1 L0 1 Z M161 0 L161 40 L163 40 L163 0 L161 0 Z M162 39 L0 39 L0 41 L162 41 L162 39 Z M1 40 L1 0 L-1 0 L-1 40 L1 40 Z","stroke":"rgba(28,28,28,1)","fillRule":"nonzero","strokeWidth":1},{"d":"M0 0 L162 0 L162 40 L0 40 L0 0 Z","fill":"rgba(217,217,217,1)","fillRule":"nonzero"}]}
      display="block"
      position="absolute"
      top="0%"
      bottom="0%"
      left="0%"
      right="0%"
      {...getOverrideProps(overrides, "Rectangle 40")}
    />
    <Image
      width="19px"
      height="16px"
      display="block"
      position="absolute"
      top="12px"
      left="132px"
      objectFit="cover"
      alt=""
      {...getOverrideProps(overrides, "image 12")}
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
      {...getOverrideProps(overrides, "View More")}
    >
      View More
    </Text>
  </View>
  )
}
