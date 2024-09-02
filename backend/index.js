require("dotenv").config();
const express = require("express");
const cors = require("cors");

const welfare_associations_router = require("./routers/welfare_associations");
const blood_group_router = require("./routers/blood_group");
const business_category_router = require("./routers/business_category");
const our_trees_router = require("./routers/our_trees");
const upcoming_events_router = require("./routers/upcoming_events");
const grievances_router = require("./routers/grievances");
const business_builder_router = require("./routers/business_builder");
const news_router = require("./routers/news");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/welfare_associations", welfare_associations_router);
app.use("/blood_group", blood_group_router);
app.use("/business_category", business_category_router);
app.use("/our_trees", our_trees_router);
app.use("/upcoming_events", upcoming_events_router);
app.use("/grievances", grievances_router);
app.use("/business_builder", business_builder_router);
app.use("/news", news_router);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
