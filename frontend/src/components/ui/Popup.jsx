import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { View, Icon } from '@aws-amplify/ui-react';


export default function Popup(props) {
  const { overrides, ...rest } = props;

  return (
  <View
    width="1920px"
    height="1080px"
    display="block"
    overflow="hidden"
    position="relative"
    backgroundColor="rgba(255,255,255,1)"
    {...getOverrideProps(overrides, "Popup")}
    {...rest}
  >
    <View
      width="1920px"
      height="1080px"
      display="block"
      position="absolute"
      top="0px"
      left="0px"
      backgroundColor="rgba(17,17,17,0.4)"
      {...getOverrideProps(overrides, "Rectangle 19")}
    />
    <View
      width="1120px"
      height="560px"
      display="block"
      position="absolute"
      top="260px"
      left="400px"
      {...getOverrideProps(overrides, "Group 43")}
    >
      <View
        width="1120px"
        height="560px"
        display="block"
        position="absolute"
        top="calc(50% - 280px - -260px)"
        left="calc(50% - 560px - -400px)"
        borderRadius="30px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 4")}
      />
      <Icon
        width="1110px"
        height="547px"
        viewBox={{"minX":0,"minY":0,"width":1110,"height":547}}
        paths={[{"d":"M 0 0 L 1110 547 M 1110 0 L 7.956989247311828 541.1182795698925","fillRule":"none"},{"d":"M-0.442034 0.896998 L1109.56 547.897 L1110.44 546.103 L0.442034 -0.896998 L-0.442034 0.896998 Z M1109.56 -0.89763 L7.51624 540.221 L8.39774 542.016 L1110.44 0.89763 L1109.56 -0.89763 Z","stroke":"rgba(51,51,51,0.1)","fillRule":"nonzero","strokeWidth":2}]}
        display="block"
        position="absolute"
        top="267px"
        left="403px"
        {...getOverrideProps(overrides, "Vector 7")}
      />
    </View>
    <Icon
      width="24px"
      height="24px"
      viewBox={{"minX":0,"minY":0,"width":24,"height":24}}
      paths={[{"d":"M 0 24 L 24 0 M 24 24 L 0 0","fillRule":"none"},{"d":"M0.707107 24.7071 L24.7071 0.707107 L23.2929 -0.707107 L-0.707107 23.2929 L0.707107 24.7071 Z M24.7071 23.2929 L0.707107 -0.707107 L-0.707107 0.707107 L23.2929 24.7071 L24.7071 23.2929 Z","stroke":"rgba(34,34,34,0.7)","fillRule":"nonzero","strokeWidth":2}]}
      display="block"
      position="absolute"
      top="218px"
      left="1455px"
      {...getOverrideProps(overrides, "Vector 8")}
    />
  </View>
  )
}
