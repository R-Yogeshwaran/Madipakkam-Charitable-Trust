import { TextField, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../config";

function AddEvents() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${baseURL}/upcoming_events`, {
      event_name,
      area,
      date: date.toString().split("-").reverse().join("-"),
      time,
      region,
    });
    await alert(res.data);
  };
  const [event_name, setEventName] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [region, setRegion] = useState("");

  return (
    <>
      <Navbar />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <TextField
          value={event_name}
          onChange={(e) => {
            setEventName(e.target.value);
          }}
          required
          id="outlined-basic"
          label="Event Name"
          variant="outlined"
        />
        <TextField
          required
          value={area}
          onChange={(e) => {
            setArea(e.target.value);
          }}
          id="outlined-basic"
          label="Area"
          variant="outlined"
        />
        <TextField
          value={region}
          onChange={(e) => {
            setRegion(e.target.value);
          }}
          required
          id="outlined-basic"
          label="Region"
          variant="outlined"
        />
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
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          required
          id="outlined-basic"
          label="Time"
          variant="outlined"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
}

export default AddEvents;
