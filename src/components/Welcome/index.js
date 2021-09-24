import { useHistory, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";

const Welcome = () => {
  const { name } = useParams("");
  const history = useHistory("");
  const handleReturn = () => {
    history.push("/");
  };
  return (
    <>
      <h1>Bem vindo, {name}</h1>
      <Button variant="contained" color="primary" onClick={handleReturn}>
        Voltar
      </Button>
    </>
  );
};

export default Welcome;
