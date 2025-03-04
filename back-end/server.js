const express = require("express");
const cors = require("cors"); // Import cors
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();

const app = express();
const port = process.env.PORT || 3000;


app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));

app.use("/user", require("./Routes/user.Route"));
app.use("/api/exercises", require("./Routes/ExerciseRoute"));
app.use("/api/cardio", require("./Routes/cardioRoute"));
app.use("/api/workout", require("./Routes/workoutRoute"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
