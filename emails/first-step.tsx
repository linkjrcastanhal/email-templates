import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";
import { h1, text, body, mainWrapper, textWrapper, image } from "./styles";
import { Feedback } from "./components/feedback";
import Footer from "./components/footer";
import Banner from "./components/banner";
import { config } from "./config";

export const FirtStep = () => (
  <Html>
    <Head />
    <Preview>Parábens! Você passou para a próxima etapa!</Preview>
    <Body style={body}>
      <Container style={mainWrapper}>
        <Banner />
        <Container style={textWrapper}>
          <Heading style={h1}>Olá, [Nome]</Heading>
          <Text style={text}>
            Sua candidatura foi recebida e avaliada cuidadosamente por nossa equipe, e estamos felizes em anunciar que você foi selecionado(a) para a fase de entrevistas!
          </Text>
          <Text style={text}>
            Ficamos impressionados com suas qualificações e acreditamos que seu perfil está alinhado com o que buscamos!
          </Text>
          <Text style={text}>
            🎉 Parabéns pela conquista! Estamos ansiosos para continuar conhecendo você e seu potencial 🚀
          </Text>

          <Img
            src={`${config.assetsUrl}/happy-students.png`}
            style={{...image, width: "300px"}}
            alt="Ilustração de estudantes comemorando"
          />

          <Text style={text}>
            Em breve, entraremos em contato com informações sobre a sala de reuniões (online) e datas.
          </Text>

          <Feedback />
        </Container>

        <Footer />
      </Container>
    </Body>
  </Html>
);

export default FirtStep;