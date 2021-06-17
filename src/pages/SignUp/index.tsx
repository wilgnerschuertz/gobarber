/* eslint-disable no-console */
import React, { useCallback, useRef } from "react";
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";

import { Container, Content, Background } from "./styles";

import LogoImg from "../../assets/logo.svg";

import Input from "../../components/input";
import Button from "../../components/button";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string()
          .required("O Nome é Obrigatório")
          .max(40, "Máximo de 40 caracteres"),
        email: Yup.string()
          .required("O E-mail é Obrigatório")
          .email("Digite um e-mail válido "),
        password: Yup.string().min(6, "No mínimo 6(seis) caracteres"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={LogoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />

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
  );
};

export default SignUp;
