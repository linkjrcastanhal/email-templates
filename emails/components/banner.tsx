import { Container, Img } from "@react-email/components"
import React from "react"

export const Banner = () => {
    return (
        <Container style={{ maxWidth: "100%" }}>
            <Img src="https://linkjr.com.br/images/banner.png" alt="Banner do Processo Seletivo" style={{ width: "100%" }} />
        </Container>
    )
}

export default Banner