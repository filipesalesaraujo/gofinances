import React, { useContext, useState } from "react";
import { ActivityIndicator, Alert, Platform } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";

import { useAuth } from "../../hooks/auth";
import { SignInSocialButton } from "../../components/SignInSocialButton";

export function SignIn() {
  const { signInWithGoogle } = useAuth();
  async function handleSignInWithGoogle() {
    console.log("LogErrro :");
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log("LogErrro :", error);
      Alert.alert("Não foi possivel conectar com a conta google");
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />
          <Title>
            Controle suas {"\n"} finanças de forma {"\n"} muito simples
          </Title>
        </TitleWrapper>
        <SignInTitle>
          Faça seu logim com {"\n"}uma das contas abaixo
        </SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            onPress={() => handleSignInWithGoogle()}   
            title="Entrar com Google"
            svg={GoogleSvg}
          />
          <SignInSocialButton title="Entrar com Apple" svg={AppleSvg} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
