import { TextField, Button } from "@mui/material";
import "./add.css";

function Add(props) {
  async function ItemAdd() {
    if (props.showEdit === "false") {
      await fetch("http://localhost:5000/list/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: props.names }),

        cache: "default",
      }).then(function (response) {
        console.log(response);
      });
      props.setName("");
      props.setFlag(!props.flag);
    } else {
      await fetch(`http://localhost:5000/list/edit/${props.index}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: props.names }),

        cache: "default",
      }).then(function (response) {
        console.log(response);
      });

      props.setEdit("false");
      props.setName("");
      props.setFlag(!props.flag);
    }
  }

  return (
    <>
      <div className="adddiv">
        <span>Add Item</span>
        <TextField
          id="item"
          label="Enter item"
          variant="outlined"
          value={props.names}
          autoFocus
          onChange={(event) => props.setName(event.target.value)}
        />
        <Button variant="contained" color="primary" onClick={ItemAdd}>
          {props.showEdit === "false" ? "Add" : "Update"}
        </Button>
      </div>
      <br></br>
      <br></br>
    </>
  );
}

export default Add;
