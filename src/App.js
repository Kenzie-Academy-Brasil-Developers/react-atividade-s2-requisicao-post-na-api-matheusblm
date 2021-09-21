import "./App.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function App() {
  const [msgErro, setMsgErro] = useState(false);
  const [msgLogin, setLogin] = useState(false);
  const handleSubmitFunction = (data) => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", data)
      .then((response) => {
        setLogin(true);
      })
      .catch((err) => {
        setMsgErro(true);
      });
  };
  const { register, handleSubmit } = useForm();

  return (
    <div className="App">
      <form onSubmit={handleSubmit(handleSubmitFunction)}>
        <TextField
          id="password"
          label="username"
          {...register("username")}
          onChange={() => setMsgErro(false)}
        />
        <TextField
          id="password"
          label="password"
          placeholder="password"
          type="password"
          {...register("password")}
          onChange={() => setMsgErro(false)}
        />
        <Button variant="outlined" type="submit">
          Entrar
        </Button>

        {msgErro && (
          <Stack sx={{ width: "70%" }} spacing={2}>
            <Alert severity="error">Requisicao Falhou!</Alert>
          </Stack>
        )}
        {msgLogin && (
          <Stack sx={{ width: "70%" }} spacing={2}>
            <Alert severity="success">Requisicao Deu Certo!!</Alert>
          </Stack>
        )}
      </form>
      <div></div>
    </div>
  );
}

export default App;
