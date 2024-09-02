import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Button } from "@mui/material";
import { baseURL } from "../config";

function Grievances() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`${baseURL}/grievances`);
      setData(res.data);
    }
    getData();
  }, []);

  async function handleSolved(id) {
    await axios.delete(`${baseURL}/grievances/${id}`);
    const res = await axios.get(`${baseURL}/grievances`);
    setData(res.data);
  }
  return (
    <>
      <Navbar />
      <div className="grie-container">
        {data &&
          data.map((d) => (
            <div className="grie-card" key={d.id}>
              <p>Name : {d.name}</p>
              <p>Mobile Number : {d.mobile_number}</p>
              <p>Region : {d.region}</p>
              <p>Grievance : {d.grievances}</p>
              <Button
                onClick={() => {
                  handleSolved(d.id);
                }}
                variant="contained"
                color="success"
              >
                Solved?
              </Button>
            </div>
          ))}
      </div>
    </>
  );
}

export default Grievances;
