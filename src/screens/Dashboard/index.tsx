import React from "react";
import { HighlightCard } from "../../components/HighlightCard";

import {
  Container,
  Header,
  UserWapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWapper>
          <UserInfo>
            <Photo
              source={{ uri: "https://github.com/filipesalesaraujo.png" }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Filipe</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWapper>
      </Header>

      <HighlightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  );
}
