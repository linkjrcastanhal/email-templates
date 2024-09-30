import { Container, Img } from "@react-email/components"
import React from "react"

export const Banner = () => {
    return (
        <Container style={{ maxWidth: "100%", backgroundColor: "#FA7317" }}>
            <Img src="https://linkjr.com.br/images/banner.png" alt="Banner do Processo Seletivo" style={{ width: "100%", margin: "0px auto"  }} />
        </Container>
    )
}

export default Banner