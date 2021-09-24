import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
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

  const [dateRegister, setDateRegister] = useState({});

  const onSubmitFunction = (data) => dateRegister(data);

  return (
    <div>
      <form className="container" onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Nome" {...register("name")} />
        {errors.name?.message}
        <input placeholder="Email" {...register("email")} />
        {errors.email?.message}

        <input placeholder="Senha" type="password" {...register("password")} />
        {errors.password?.message}

        <input
          placeholder="Confirmar Senha"
          type="password"
          {...register("confpassword")}
        />
        {errors.confpassword?.message}

        <button type="submit">CADASTRAR</button>
      </form>
    </div>
  );
};

export default Form;
