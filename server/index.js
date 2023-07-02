const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./connection");

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});

//Route import
app.post("/upload", async (req, res) => {
  try {
    const submittedInfo = req.body;
    const newUpload = await pool.query(
      "INSERT INTO stored_file_path (user_id, file_path) VALUES ($1, $2) RETURNING *",
      [submittedInfo.user_id, submittedInfo.file_path]
    );
    res.json(newUpload.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

app.get("/upload", async (req, res) => {
  try {
    const allUploads = await pool.query("SELECT * FROM stored_file_path");
    res.json(allUploads.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

app.put("/upload", async (req, res) => {
  try {
    const submittedInfo = req.body;
    res.send("Got a put request at /upload");
  } catch {
    console.log(err);
  }
});

app.delete("/upload", async (req, res) => {
  try {
    res.send("Got a deleted request at /upload");
  } catch (err) {
    console.log(err);
  }
});
