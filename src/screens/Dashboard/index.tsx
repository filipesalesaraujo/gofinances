import React from "react";

import {
  Container,
  Header,
  UserWarning,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWarning>
          <UserInfo>
            <Photo
              source={{ uri: "https://github.com/filipesalesaraujo.png" }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Filipe</UserName>
            </User>
          </UserInfo>
        </UserWarning>
      </Header>
    </Container>
  );
}
