import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { View, Icon, Text } from '@aws-amplify/ui-react';


export default function Sectionabout(props) {
  const { overrides, ...rest } = props;

  return (
  <View
    width="1920px"
    height="1080px"
    display="block"
    position="relative"
    {...getOverrideProps(overrides, "Sectionabout")}
    {...rest}
  >
    <View
      width="1920px"
      height="1080px"
      display="block"
      position="absolute"
      top="0%"
      bottom="0%"
      left="0%"
      right="0%"
      backgroundColor="rgba(51,51,51,1)"
      {...getOverrideProps(overrides, "Rectangle 6")}
    />
    <View
      width="332.21px"
      height="427px"
      display="block"
      position="absolute"
      top="30.28%"
      bottom="30.19%"
      left="23.33%"
      right="59.36%"
      {...getOverrideProps(overrides, "Group 6")}
    >
      <View
        width="332.21px"
        height="427px"
        display="block"
        position="absolute"
        top="76.58%"
        bottom="-76.58%"
        left="134.85%"
        right="-134.85%"
        backgroundColor="rgba(143,150,206,0.65)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      />
      <Icon
        width="331.24px"
        height="427px"
        viewBox={{"minX":0,"minY":0,"width":331.23663330078125,"height":427}}
        paths={[{"d":"M 331.23663330078125 0 L 0 427 M 0 0 L 331.23663330078125 427","fillRule":"none"},{"d":"M330.842 -0.306466 L-0.395068 426.694 L0.395068 427.306 L331.632 0.306466 L330.842 -0.306466 Z M-0.395068 0.306466 L330.842 427.306 L331.632 426.694 L0.395068 -0.306466 L-0.395068 0.306466 Z","stroke":"rgba(56,163,146,1)","fillRule":"nonzero","strokeWidth":1}]}
        display="block"
        position="absolute"
        top="76.58%"
        bottom="-76.58%"
        left="135.15%"
        right="-134.85%"
        {...getOverrideProps(overrides, "Vector 1")}
      />
    </View>
    <Text
      fontFamily="Inter"
      fontSize="42px"
      fontWeight="600"
      color="rgba(0,0,0,1)"
      lineHeight="50.82954406738281px"
      textAlign="left"
      display="block"
      width="493px"
      position="absolute"
      top="30.28%"
      bottom="65%"
      left="45.57%"
      right="28.75%"
      whiteSpace="pre-wrap"
      {...getOverrideProps(overrides, "꾸준히 준비하고 발전하는")}
    >
      꾸준히  준비하고 발전하는
    </Text>
    <Text
      fontFamily="Inter"
      fontSize="16px"
      fontWeight="400"
      color="rgba(217,217,217,1)"
      lineHeight="19.363636016845703px"
      textAlign="left"
      display="block"
      letterSpacing="0.97px"
      width="613.62px"
      position="absolute"
      top="38.43%"
      bottom="31.39%"
      left="45.63%"
      right="22.42%"
      whiteSpace="pre-wrap"
      {...getOverrideProps(overrides, "안녕하세요, 신입 퍼블리셔 윤준현입니다. 저는 제 영향력 안에 있는 사람에게 이로운 영향을 미치는 것에 그치지 않고 보다 많은 사람들에게 이로운 영향을 미칠 수 있는 웹을 만드는 것이 목표입니다. 사용자 입장에서 고려하고, 어려움을 겪는 사람에게도 쓰기 편한 웹 개발하는 것, 그 또한 퍼블리셔와 서비스 제공자로서의 역할로 생각하고 있습니다. 범용성과 유저의 가독성 및 편리함을 위해 고민 또 고민해야 한다고 생각합니다. 저는 퍼블리셔 뿐만 아니라 미래 프론트엔드 개발자가 되고자 바빠도 하루에 2~3시간동안 Javascript와 React에 대해 공부하고 연습한 프로젝트를 GitHub에 올리고 있습니다. 계획으로는 Typescript와 Vue에 대해 공부하고, 백엔드 서비스도 겸할 수 있는 Node.js를 활용해보고자 합니다.")}
    >
      안녕하세요, 신입 퍼블리셔 윤준현입니다.
저는 제 영향력 안에 있는 사람에게 이로운 영향을 미치는 것에 그치지 않고 
보다 많은 사람들에게 이로운 영향을 미칠 수 있는 웹을 만드는 것이 목표입니다.

사용자 입장에서 고려하고, 어려움을 겪는 사람에게도 쓰기 편한 웹 개발하는 것, 
그 또한 퍼블리셔와 서비스 제공자로서의 역할로 생각하고 있습니다. 
범용성과 유저의 가독성 및 편리함을 위해 고민 또 고민해야 한다고 생각합니다.

저는 퍼블리셔 뿐만 아니라 미래 프론트엔드 개발자가 되고자
바빠도 하루에 2~3시간동안 Javascript와 React에 대해 공부하고 연습한 프로젝트를 GitHub에 올리고 있습니다.

계획으로는 Typescript와 Vue에 대해 공부하고, 백엔드 서비스도 겸할 수 있는
Node.js를 활용해보고자 합니다.
    </Text>
    <Text
      fontFamily="Inter"
      fontSize="120px"
      fontWeight="500"
      color="rgba(130,130,130,1)"
      lineHeight="145.22726440429688px"
      textAlign="left"
      display="block"
      width="650px"
      height="265px"
      position="absolute"
      top="2.31%"
      bottom="73.15%"
      left="66.15%"
      right="0%"
      whiteSpace="pre-wrap"
      {...getOverrideProps(overrides, "BE STEADY")}
    >
      BE STEADY
    </Text>
  </View>
  )
}
