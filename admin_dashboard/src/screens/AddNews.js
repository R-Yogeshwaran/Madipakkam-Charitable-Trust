import { TextField, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../config";

function AddNews() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${baseURL}/news`, {
      date: date.toString().split("-").reverse().join("-"),
      title,
      body,
    });
    await alert("News added successfully");
  };
  const d = new Date();
  const year = d.getFullYear().toString();
  let month = (Number(d.getMonth()) + 1).toString();
  const day = d.getDate().toString();
  if (month.length === 1) {
    month = "0" + month;
  }

  const [date, setDate] = useState(year + "-" + month + "-" + day);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <>
      <Navbar />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Date*</label>
        <TextField
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          required
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <TextField
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          multiline
          rows={"10"}
          required
          id="outlined-basic"
          label="Body"
          variant="outlined"
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
}

export default AddNews;
