import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../config";

function News() {
  const [news, setNews] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${baseURL}/news`);
      await setNews(res.data);
    }
    fetchData();
  }, []);
  async function handleDelete(id) {
    let conf = window.confirm("Are you sure you want to delete the user?");
    if (conf) {
      await axios.delete(`${baseURL}/news/${id}`);
      await alert("News deleted successfully");
      const up_res = await axios.get(`${baseURL}/news`);
      await setNews(up_res.data);
    }
  }
  return (
    <>
      <Navbar />
      <h1 style={{ paddingLeft: "20px", paddingTop: "20px" }}>News</h1>
      <div className="grie-container">
        {news &&
          news.map((d) => (
            <div className="grie-card" key={d.id}>
              <p>Title : {d.title}</p>
              <p>Date: {d.date}</p>
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
                  navigate(`/edit-news/${d.id}`);
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

export default News;
