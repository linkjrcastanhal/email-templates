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
import { h1, text, body, mainWrapper, textWrapper, image, image } from "./styles";
import { Feedback } from "./components/feedback";
import Footer from "./components/footer";
import Banner from "./components/banner";
import { config } from "../config";

export const Approved = () => (
  <Html>
    <Head />
    <Preview>Parábens! Você passou para a próxima etapa!</Preview>
    <Body style={body}>
      <Container style={mainWrapper}>
        <Banner />
        <Container style={textWrapper}>
          <Heading style={h1}>Olá, [Nome]</Heading>
          <Text style={text}>
            Sua candidatura foi recebida e avaliada cuidadosamente por nossa equipe, e estamos feliz em anunciar que você foi selecionado(a) para a próxima fase do nosso processo seletivo!
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
            Em breve, entraremos em contato sobre as próximas etapas do processo seletivo.
          </Text>

          <Feedback />
        </Container>

        <Footer />
      </Container>
    </Body>
  </Html>
);

export default Approved;