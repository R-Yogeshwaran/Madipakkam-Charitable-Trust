import { TextField, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../config";

function Edit() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      `${baseURL}/welfare_associations/${email}`,
      {
        name,
        email,
        date_of_birth: date_of_birth.toString().split("-").reverse().join("-"),
        region,
        mobile_number,
        blood_group,
        business,
        professional_details,
        business_details,
        business_website,
        password,
      }
    );
    console.log(res);
    await alert("Successfully edited!");
    await navigate("/");
  };
  const { paramEmail } = useParams();
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
  const [password, setPassword] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `${baseURL}/welfare_associations/${paramEmail}`
      );
      const user = await res.data[0];

      await setName(user.name);
      await setEmail(user.email);
      await setDOB(user.date_of_birth);
      await setRegion(user.region);
      await setMobile(user.mobile_number);
      await setBloodGrp(user.blood_group);
      await setBusiness(user.business);
      await setBDetails(user.business_details);
      await setProf(user.professional_details);
      await setBWebsite(user.business_website);
      await setPassword(user.password);
    }
    fetchData();
  }, [paramEmail]);

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
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          id="outlined-basic"
          label="Password"
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
          value={business_website}
          onChange={(e) => {
            setBWebsite(e.target.value);
          }}
          required
          id="outlined-basic"
          label="Business website"
          variant="outlined"
        />
        <Button onClick={handleSubmit} type="submit" variant="contained">
          Edit
        </Button>
      </form>
    </>
  );
}

export default Edit;
