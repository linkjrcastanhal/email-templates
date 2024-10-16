import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Text,
} from "@react-email/components";
import * as React from "react";
import { h1, text, body, mainWrapper, textWrapper, button } from "./styles";
import { Feedback } from "./components/feedback";
import Footer from "./components/footer";
import Banner from "./components/banner";
import { env } from "./config/env";

export const Approved = () => (
  <Html>
    <Head />
    <Preview>Parabéns! Você foi aprovado(a) no Processo Seletivo 2024! 🎉</Preview>
    <Body style={body}>
      <Container style={mainWrapper}>
        <Banner />
        <Container style={textWrapper}>
          <Heading style={h1}>Parabéns! Você foi aprovado(a) no Processo Seletivo 2024! 🎉</Heading>
          <Text style={text}>
            Olá, [nome]! É com grande alegria que informamos sua aprovação no processo seletivo para integrar a nossa equipe na Link Junior!  👏
          </Text>
          <Text style={text}>
            Durante as etapas do processo, demonstrou habilidades, dedicação e um perfil alinhado com os valores e objetivos da nossa empresa. Temos certeza de que sua participação trará muitas contribuições para os projetos que desenvolvemos.
          </Text>
          <Text style={text}>
            Nos próximos dias, entraremos em contato para agendar uma reunião de boas-vindas e apresentar os próximos passos. Vamos discutir o planejamento de integração, as primeiras atividades e como podemos apoiá-lo(a) nessa nova jornada.
          </Text>
          <Text style={text}>
            Enquanto isso, convidamos você a se juntar ao nosso grupo no WhatsApp e acessar o Hully para ficar por dentro das próximas tarefas!
          </Text>

          <Text style={h1}>
            Atenção
          </Text>
          <Text style={text}>
            Você receberá em breve um e-mail com o link para a plataforma DocuSign, onde deverá assinar o Termo de Voluntariado e formalizar sua contratação para o time. 
          </Text>

          <Row style={{ margin: '32px 0px' }}>
            <td
              align="center"
              colSpan={1}
              style={{ paddingRight: 16, width: "50%" }}
            >
              <Button
                href={env.WHATSAPP}
                style={{
                  ...button,
                  borderColor: '#CD5C08',
                  backgroundColor: '#CD5C08',
                  color: '#FFFFFF'
                }}
              >
                Comunidade no WhatsApp
              </Button>
            </td>
            <td
              align="center"
              colSpan={1}
              style={{ paddingLeft: 16, width: "50%" }}
            >
              <Button
                href={env.HULY}
                style={{
                  ...button,
                  borderColor: '#CD5C08',
                  color: '#CD5C08'

                }}
              >
                Huly
              </Button>
            </td>
          </Row>

          <Feedback />
        </Container>

        <Footer />
      </Container>
    </Body>
  </Html>
);

export default Approved;
