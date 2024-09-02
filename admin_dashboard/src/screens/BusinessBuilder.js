import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Button } from "@mui/material";
import { baseURL } from "../config";

function BusinessBuilder() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `${baseURL}/business_builder/not-approved`
      );
      setData(res.data);
    }
    getData();
  }, []);

  async function handleSolved(id) {
    await axios.put(`${baseURL}/business_builder/${id}`, {
      approval: "true",
    });
    const res = await axios.get(
      `${baseURL}/business_builder/not-approved`
    );
    setData(res.data);
    await alert("Approved successfully");
  }
  return (
    <>
      <Navbar />
      <div className="grie-container">
        {data &&
          data.map((d) => (
            <div className="grie-card" key={d.id}>
              <p>Name : {d.business_name}</p>
              <p>Email : {d.mail}</p>
              <p>Mobile Number : {d.mobile_number}</p>
              <p>Region : {d.region}</p>
              <p>Business Details : {d.business_details}</p>
              <Button
                onClick={() => {
                  handleSolved(d.id);
                }}
                variant="contained"
                color="success"
              >
                Approve
              </Button>
            </div>
          ))}
      </div>
    </>
  );
}

export default BusinessBuilder;
