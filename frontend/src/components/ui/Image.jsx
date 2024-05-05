import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { View, Icon } from '@aws-amplify/ui-react';


export default function Image(props) {
  const { overrides, ...rest } = props;

  return (
  <View
    width="492.5px"
    height="342px"
    display="block"
    position="relative"
    {...getOverrideProps(overrides, "Image")}
    {...rest}
  >
    <View
      width="492px"
      height="342px"
      display="block"
      position="absolute"
      top="0%"
      bottom="0%"
      left="0%"
      right="0.1%"
      backgroundColor="rgba(217,217,217,1)"
      {...getOverrideProps(overrides, "Rectangle 39")}
    />
    <Icon
      width="492.5px"
      height="341.5px"
      viewBox={{"minX":0,"minY":0,"width":492.5,"height":341.5}}
      paths={[{"d":"M 492.5 0 L 0 341.5 M 0 0 L 492.5 341.5","fillRule":"none"},{"d":"M492.215 -0.410886 L-0.284909 341.089 L0.284909 341.911 L492.785 0.410886 L492.215 -0.410886 Z M-0.284909 0.410886 L492.215 341.911 L492.785 341.089 L0.284909 -0.410886 L-0.284909 0.410886 Z","stroke":"rgba(0,0,0,1)","fillRule":"nonzero","strokeWidth":1}]}
      display="block"
      position="absolute"
      top="0.15%"
      bottom="0%"
      left="0%"
      right="0%"
      {...getOverrideProps(overrides, "Vector 15")}
    />
  </View>
  )
}
