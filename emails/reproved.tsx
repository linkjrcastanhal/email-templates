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
import { config } from "../config";

export const Reproved = () => (
  <Html>
    <Head />
    <Preview>Resulado do processo seletivo LinkJr 2024</Preview>
    <Body style={body}>
      <Container style={mainWrapper}>
        <Banner />
        <Container style={textWrapper}>
          <Heading style={h1}>Olá, [Nome]</Heading>
          <Text style={text}>
            Gostaríamos de agradecer sinceramente pelo seu interesse em fazer parte da Link Júnior e pelo tempo dedicado ao nosso processo seletivo. Após uma cuidadosa avaliação da sua candidatura na fase curricular, infelizmente, informamos que seu perfil não foi selecionado para avançar para as próximas etapas.
          </Text>
          <Text style={text}>
            Reconhecemos o seu esforço e as habilidades demonstradas, e esperamos que você continue buscando oportunidades que estejam alinhadas aos seus objetivos profissionais. Fique à vontade para participar de futuros processos seletivos da nossa empresa.
          </Text>
          <Text style={text}>
            😊 Desejamos muito sucesso em sua trajetória!
          </Text>

          <Img
            src={`${config.assetsUrl}/student.png`}
            style={{...image, width: "300px"}}
            alt="Ilustração de estudantes comemorando"
          />

          <Feedback />
        </Container>

        <Footer />
      </Container>
    </Body>
  </Html>
);

export default Reproved;