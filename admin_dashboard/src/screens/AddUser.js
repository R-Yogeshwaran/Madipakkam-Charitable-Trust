import { TextField, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../config";

function AddUser() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const r = await axios.get(
      `${baseURL}/welfare_associations/${email}`
    );
    if (r.data.length !== 0) {
      alert("Email already exists!");
    } else {
      const res = await axios.post(
        `${baseURL}/welfare_associations`,
        {
          name,
          email,
          date_of_birth: date_of_birth
            .toString()
            .split("-")
            .reverse()
            .join("-"),
          region,
          mobile_number,
          blood_group,
          business,
          professional_details,
          business_details,
          business_website,
        }
      );
      await alert(res.data);
    }
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date_of_birth, setDOB] = useState("");
  const [region, setRegion] = useState("");
  const [mobile_number, setMobile] = useState("");
  const [blood_group, setBloodGrp] = useState("");
  const [business, setBusiness] = useState("");
  const [professional_details, setProf] = useState("");
  const [business_details, setBDetails] = useState("");
  const [business_website, setBWebsite] = useState("");
  return (
    <>
      <Navbar />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <TextField
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          required
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <label>DOB*</label>
        <TextField
          type="date"
          value={date_of_birth}
          onChange={(e) => {
            setDOB(e.target.value);
          }}
          required
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          type="text"
          value={region}
          onChange={(e) => {
            setRegion(e.target.value);
          }}
          required
          id="outlined-basic"
          label="Region"
          variant="outlined"
        />
        <TextField
          type="number"
          value={mobile_number}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
          required
          id="outlined-basic"
          label="Mobile Number"
          variant="outlined"
        />
        <TextField
          type="text"
          value={blood_group}
          onChange={(e) => {
            setBloodGrp(e.target.value);
          }}
          required
          id="outlined-basic"
          label="Blood Group"
          variant="outlined"
        />
        <TextField
          type="text"
          value={business}
          onChange={(e) => {
            setBusiness(e.target.value);
          }}
          required
          id="outlined-basic"
          label="Business"
          variant="outlined"
        />
        <TextField
          type="text"
          value={professional_details}
          onChange={(e) => {
            setProf(e.target.value);
          }}
          required
          id="outlined-basic"
          label="Professional Details"
          variant="outlined"
        />
        <TextField
          type="text"
          value={business_details}
          onChange={(e) => {
            setBDetails(e.target.value);
          }}
          required
          id="outlined-basic"
          label="Business Details"
          variant="outlined"
        />
        <TextField
          type="text"
          value={business_website}
          onChange={(e) => {
            setBWebsite(e.target.value);
          }}
          required
          id="outlined-basic"
          label="Business website"
          variant="outlined"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
}

export default AddUser;
