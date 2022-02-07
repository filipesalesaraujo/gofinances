import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

interface IconsProps {
  type: "up" | "down";
}

interface ContainerProps {
  isActive: boolean;
  type: "up" | "down";
}

export const Container = styled.View<ContainerProps>`
  max-width: 48%;
  width: 100%;

  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
${({ isActive, type }) =>
  isActive &&
  type === "up" &&
  css`
    background-color: ${({ theme }) => theme.colors.success.light};
    border: 0;
  `})};
${({ isActive, type }) =>
  isActive &&
  type === "down" &&
  css`
    background-color: ${({ theme }) => theme.colors.attention.light};
    border: 0;
  `})};
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Icon = styled(Feather)<IconsProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success.main : theme.colors.attention.main};
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
