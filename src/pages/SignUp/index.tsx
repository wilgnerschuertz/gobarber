/* eslint-disable no-console */
import React from 'react'
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'

import { Container, Content, Background } from './styles'

import LogoImg from '../../assets/logo.svg'
import Input from '../../components/input'
import Button from '../../components/button'

const SignUp: React.FC = () => {
    function handleSubmit(data: object): void {
        console.log(data)
    }
    return (
        <Container>
            <Background />
            <Content>
                <img src={LogoImg} alt="GoBarber" />
                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu Cadastro</h1>

                    <Input name="nome" icon={FiUser} placeholder="Nome" />
                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />

                    <Button type="submit">Entrar</Button>
                </Form>
                <a href="forgot">
                    <FiArrowLeft />
                    Voltar ao Logon
                </a>
            </Content>
        </Container>
    )
}

export default SignUp
