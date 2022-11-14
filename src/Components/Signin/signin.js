import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signin(props) {
  const navigate = useNavigate();
  const [names, setName] = useState();
  const [password, setPassword] = useState();
  function redirectToTodo() {
    if (names === "admin" && password === "123") {
      localStorage.setItem("auth", true);
      navigate("/layout");
    } else {
      alert("wrong username or password");
    }
  }

  return (
    <div style={{ padding: "10em", border: "solid black 3px", margin: "10em" }}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />
      <br></br>
      <br></br>
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        onChange={(event) => setPassword(event.target.value)}
      />
      <br></br>
      <br></br>
      <Button variant="contained" onClick={redirectToTodo}>
        Sign in
      </Button>
    </div>
  );
}

export default Signin;
