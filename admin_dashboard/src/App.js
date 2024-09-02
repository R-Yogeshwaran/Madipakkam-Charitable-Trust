import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./screens/AddUser";
import AddTrees from "./screens/AddTrees";
import AddEvents from "./screens/AddEvents";
import Grievances from "./screens/Grievances";
import Home from "./screens/Home";
import BusinessBuilder from "./screens/BusinessBuilder";
import Edit from "./screens/Edit";
import AddNews from "./screens/AddNews";
import News from "./screens/News";
import EditNews from "./screens/EditNews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/add-trees" element={<AddTrees />} />
        <Route path="/add-events" element={<AddEvents />} />
        <Route path="/grievances" element={<Grievances />} />
        <Route path="/business-builder" element={<BusinessBuilder />} />
        <Route path="/edit/:paramEmail" element={<Edit />} />
        <Route path="/add-news" element={<AddNews />} />
        <Route path="/news" element={<News />} />
        <Route path="/edit-news/:id" element={<EditNews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
