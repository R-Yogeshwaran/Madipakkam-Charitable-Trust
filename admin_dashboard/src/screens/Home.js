import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../config";

function Home() {
  const [users, setUsers] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${baseURL}/welfare_associations`);
      await setUsers(res.data);
    }
    fetchData();
  }, []);
  async function handleDelete(id) {
    let conf = window.confirm("Are you sure you want to delete the user?");
    if (conf) {
      await axios.delete(`${baseURL}/welfare_associations/${id}`);
      await alert("User deleted successfully");
      const up_res = await axios.get(
        `${baseURL}/welfare_associations`
      );
      await setUsers(up_res.data);
    }
  }
  return (
    <>
      <Navbar />
      <h1 style={{ paddingLeft: "20px", paddingTop: "20px" }}>Users</h1>
      <div className="grie-container">
        {users &&
          users.map((d) => (
            <div className="grie-card" key={d.id}>
              <p>Name : {d.name}</p>
              <p>Mobile Number : {d.mobile_number}</p>
              <p>Email : {d.email}</p>
              <p>Password : {d.password}</p>
              <Button
                onClick={() => {
                  handleDelete(d.id);
                }}
                variant="contained"
                color="error"
              >
                Delete
              </Button>
              &nbsp;&nbsp;
              <Button
                onClick={() => {
                  navigate(`/edit/${d.email}`);
                }}
                variant="contained"
                color="primary"
              >
                Edit
              </Button>
            </div>
          ))}
      </div>{" "}
    </>
  );
}

export default Home;
