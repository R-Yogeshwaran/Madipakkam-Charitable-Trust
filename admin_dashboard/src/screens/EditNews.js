import { TextField, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../config";

function EditNews() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(`${baseURL}/news/${id}`, {
      title,
      body,
      date: date.toString().split("-").reverse().join("-"),
    });
    console.log(res);
    await alert("Successfully edited!");
    await navigate("/news");
  };
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${baseURL}/news/${id}`);
      const news = await res.data;
      console.log(res);
      const darr = news.date.split("-");
      const date = darr[0];
      let month = darr[1];
      const year = darr[2];
      if (month.length === 1) {
        month = "0" + month;
      }

      await setTitle(news.title);
      await setDate(year + "-" + month + "-" + date);
      await setBody(news.body);
    }
    fetchData();
  }, [id]);

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

        <Button
          onClick={() => {
            handleSubmit();
          }}
          type="submit"
          variant="contained"
        >
          Edit
        </Button>
      </form>
    </>
  );
}

export default EditNews;
