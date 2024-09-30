import { Body, Container, Head, Heading, Html, Img, Text } from "@react-email/components"
import { body, h1, image, mainWrapper, text, text, text, textWrapper } from "./styles"
import * as React from "react";
import Banner from "./components/banner";
import Footer from "./components/footer";
import { config } from "../config";
import Feedback from "./components/feedback";

export const Challenge = () => {
    return (
        <Html>
            <Head />
            <Body style={body}>
                <Container style={mainWrapper}>
                    <Banner />

                    <Container style={textWrapper}>
                        <Heading style={h1}>Olá, [Nome]!</Heading>

                        <Text style={text}>
                            Como parte do nosso processo seletivo, estaremos propondo um Desafio Técnico, para avaliar suas habilidades e o seu pensamento criativo ao solucionar problemas relacionados ao seu campo de atuação na Link Júnior.
                        </Text>

                        <Text style={text}>
                            Não se preocupe, acreditamos no seu potencial em sua forma de pensar e superar obstáculos, estamos confiantes que irá se sair bem!
                        </Text>

                        <Img
                            src={`${config.assetsUrl}/app-development.png`}
                            style={{...image, width: "480px"}}
                            alt="Ilustração de estudantes desenvolvedo um aplicativo"
                        />

                        <Text style={h1}>
                            Detalhes do Desafio
                        </Text>

                        <ul style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
                            <li style={text}>
                                <span style={{ fontWeight: "bold" }}>Descrição:</span> desenvolva uma aplicação para cadastro de livros em uma biblioteca.
                            </li>
                            <li style={text}>
                                <span style={{ fontWeight: "bold" }}>Requisitos:</span>
                                <ul style={{ display: "flex", flexDirection: "column", gap: "8px", margin: "8px 0px" }}>
                                    <li style={text}>
                                        O código deve ser feito em JavaScript, HTML e CSS
                                    </li>
                                    <li style={text}>
                                        Deve estar integrado a um banco de dados MySQL
                                    </li>
                                    <li style={text}>
                                        O código deve estar bem estruturado.
                                    </li>
                                </ul>
                            </li>
                            <li style={text}>
                                <span style={{ fontWeight: "bold" }}>Prazos:</span> Por favor, envie o desafio até o <span style={{ fontWeight: "bold" }}>dia [data] às [hora]</span>.
                            </li>
                        </ul>

                        <Feedback />
                    </Container>

                    <Footer />
                </Container>
            </Body>
        </Html>
    )
} 

export default Challenge