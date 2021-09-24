import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Input } from "@material-ui/core";

const Form = () => {
  const history = useHistory({});
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
        "Nome deve conter apenas letras"
      ),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "É Necessário ter letras, números e ao menos um símbolo."
      ),
    confpassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "Senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => history.push(`/home/${data.name}`);

  return (
    <div>
      <form className="container" onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          variant="contained"
          color="primary"
          placeholder="Nome"
          {...register("name")}
        />
        {errors.name?.message}
        <Input placeholder="Email" {...register("email")} />
        {errors.email?.message}

        <Input placeholder="Senha" type="password" {...register("password")} />
        {errors.password?.message}

        <Input
          placeholder="Confirmar Senha"
          type="password"
          {...register("confpassword")}
        />
        {errors.confpassword?.message}

        <Button variant="contained" color="primary" type="submit">
          CADASTRAR
        </Button>
      </form>
    </div>
  );
};

export default Form;
