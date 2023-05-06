import { ViewProps } from "react-native";
import styled from "styled-components/native";
import {
  color,
  flex,
  space,
  SpaceProps,
  ColorProps,
  HeightProps,
  FlexboxProps,
  BorderProps,
  BorderRadiusProps,
  WidthProps,
  PositionProps,
} from "styled-system";
import Colors from "../Constants";


type BoxProps =
  | SpaceProps
  | ColorProps
  | HeightProps
  | ViewProps
  | BorderProps
  | BorderRadiusProps
  | FlexboxProps
  | WidthProps
  | PositionProps;

export const Box = styled.View<BoxProps>`
  ${color}
  ${space}
  ${flex}
	position: relative;
`;

export const Divider = styled.View<BoxProps>`
  border-bottom-width: 1px;
  border-bottom-color: ${color};
  width: 100%;
  ${space}
`;

export const Container = styled.View`
  padding: 20px;
  flex: 1;
  background-color: ${Colors.white};
`;

export const ButtonDefault = styled.TouchableOpacity`
  height: 52px;
  width: 100%;
  border-radius: 10px;
  background-color: ${Colors.green};
  align-items: center;
  justify-content: center;
`;

export const TextButtonDefault = styled.Text`
  color: ${Colors.white};
  font-size: 16px;
  font-weight: bold;
`;

export const HorizontalDivider = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.green};
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
`;