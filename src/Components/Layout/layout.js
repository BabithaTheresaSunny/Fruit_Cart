import "./layout.css";
import Add from "../Add/add";
import Row from "../Row/row";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Layout(props) {
  const [names, setName] = useState("");
  const [index, setIndex] = useState();
  const [showEdit, setEdit] = useState("false");
  const navigate = useNavigate();
  const [datafetch, setdata] = useState([]);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:5000/list/");
      console.log(response);
      const data = await response.json();
      setdata(data);
      console.log(data);
    }
    getData();
  }, [flag]);

  function logout() {
    localStorage.setItem("auth", false);
    navigate("/");
  }

  return (
    <>
      <div className="header">
        <Button
          variant="contained"
          size="small"
          className="logoutbtn"
          color="primary"
          onClick={logout}
        >
          Logout
        </Button>
      </div>
      <h1 style={{ color: "rgb(105 90 172)", fontSize: "3em" }}>Fruit Cart</h1>
      <Add
        index={index}
        names={names}
        flag={flag}
        setFlag={setFlag}
        setName={setName}
        setEdit={setEdit}
        showEdit={showEdit}
      />
      <div className="list">
        {datafetch.map((item, index) => {
          return (
            <Row
              className="row"
              showEdit={showEdit}
              setIndex={setIndex}
              setName={setName}
              flag={flag}
              setFlag={setFlag}
              setEdit={setEdit}
              item={item.fruit}
              id={item.index}
              key={index}
              names={names}
              num={index}
            ></Row>
          );
        })}
      </div>
    </>
  );
}
export default Layout;
