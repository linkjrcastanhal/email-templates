import { Container, Img, Text } from "@react-email/components"
import React from "react"
import { footerText } from "../styles"

export const Footer = () => {
    return (
        <Container style={{backgroundColor: "#E7E5E4", padding: "32px 24px", margin: "0px", maxWidth: "100%", textAlign: "center" }}>
            <Img src="https://linkjr.com.br/android-chrome-512x512.png" style={{ width: "64px", borderRadius: "6px", margin: "0px auto" }} />
            <Text style={{...footerText}}>Conectando ideias, impulsionando soluções.</Text>
        </Container>
    )
}

export default Footer