const cors = require("cors");
const express = require("express");
require("dotenv").config();

// importing Routers
const ChaptersRouter = require("./routers/chaptersRouter");
const SectionsRouter = require("./routers/sectionsRouter");
const CadetsRouter = require("./routers/cadetsRouter");

// importing Controllers
const ChaptersController = require("./controllers/chaptersController");
const SectionsController = require("./controllers/sectionsController");
const CadetsController = require("./controllers/cadetsController");

//import DB
const db = require("./db/models/index");
const {
  appointment,
  blocked_date,
  cadet_chapters,
  cadet_sections,
  cadet,
  chapter,
  comment,
  memo_entry,
  section,
  note,
  sl,
} = db;

// initializing Controllers -> note the lowercase for the first word
const chaptersController = new ChaptersController(chapter);
const sectionsController = new SectionsController(section);

// for cadets, get
const cadetsController = new CadetsController(
  cadet,
  cadet_sections,
  cadet_chapters,
  section
);

// initializing Routers
const chaptersRouter = new ChaptersRouter(chaptersController).routes();
const sectionsRouter = new SectionsRouter(sectionsController).routes();
const cadetsRouter = new CadetsRouter(cadetsController).routes();

const PORT = process.env.PORT;
const app = express();

//enable CORS access to this server
app.use(cors());

//enable reading JSON request bodies
app.use(express.json());

//enable and use router
app.use("/chapters", chaptersRouter);
app.use("/sections", sectionsRouter);
app.use("/cadets", cadetsRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
