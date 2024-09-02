import { TextField, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../config";

function AddTrees() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${baseURL}/our_trees`, {
      planted_on: planted_on.toString().split("-").reverse().join("-"),
      area,
      region,
    });
    await alert(res.data);
  };
  const [planted_on, setPlantedOn] = useState("");
  const [area, setArea] = useState("");
  const [region, setRegion] = useState("");

  return (
    <>
      <Navbar />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Planted on*</label>
        <TextField
          type="date"
          value={planted_on}
          onChange={(e) => {
            setPlantedOn(e.target.value);
          }}
          required
          id="outlined-basic"
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

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
}

export default AddTrees;
