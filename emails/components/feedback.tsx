import { Link, Text } from "@react-email/components"
import React from "react"
import { h1, text, link } from "../styles"
import { config } from "../config"

export const Feedback = () => {
    return (
        <>
            <Text style={{ ...h1 }}>
                Dúvidas e Sugestões
            </Text>

            <Text style={{ ...text }}>
                Em caso de dúvidas, questionamentos ou sugestões sobre o processo seletivo, fique à vontade para entrar em contato conosco através do e-mail <Link href={`mailto:${config.email}`} style={link}>{config.email}</Link> ou por via direct no <Link href={config.instagram}  style={link}>Instagram da Link Júnior.</Link>
            </Text>

            <Text style={{ ...text }}>
                Valorizamos muito a opinião e o feedback dos candidatos, pois acreditamos que essa troca é fundamental para melhorar continuamente nosso processo e garantir uma experiência positiva para todos!
            </Text>

            <Text style={{ ...text }}>
                Atenciosamente, <span style={{ fontWeight: "bold" }}>Link Júnior Tecnologias</span>
            </Text>
        </>
    )
}

export default Feedback