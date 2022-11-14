import "./row.css";
import { Button, Card } from "@mui/material";
function Row(props) {
  async function RemoveItem() {
    await fetch("http://localhost:5000/list/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: props.id }),

      cache: "default",
    }).then(function (response) {
      console.log(response);
    });
    props.setFlag(!props.flag);
  }

  async function EditItem() {
    props.setEdit("true");
    props.setName(props.item);
    props.setIndex(props.id);
  }

  return (
    <>
      <Card
        variant="outlined"
        className="card"
        sx={{ backgroundColor: "#F5F5F5" }}
      >
        <div onBlur={EditItem} style={{ width: "10%" }}>
          {props.num + 1}
        </div>
        <div style={{ width: "60%" }}>{props.item}</div>
        <div style={{ width: "30%" }} className="fixbtn">
          <Button variant="contained" color="primary" onClick={EditItem}>
            Edit
          </Button>
          <Button
            variant="outlined"
            disabled={JSON.parse(props.showEdit)}
            onClick={RemoveItem}
          >
            Remove
          </Button>
        </div>
      </Card>
    </>
  );
}
export default Row;
