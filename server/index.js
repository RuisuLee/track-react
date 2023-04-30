const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { NAVS } = require("./mock/nav-bar");
const { REACT_THEMES } = require("./mock/react/react");
const { USERS } = require("./mock/users");
const app = express();

const getProgress = (lessons) => {
  const progressPerLesson = Math.ceil(100 / lessons.length);
  const learnedLessons = lessons.filter(
    (lesson) => lesson.learned === true
  ).length;
  const progress = learnedLessons * progressPerLesson;
  return progress > 100 ? 100 : progress;
};

const whitelist = ["http://localhost:5173", "http://127.0.0.1:5173"];

const corsOptions = {
  credentials: true,
  optionsSuccessStatus: 200,
  origin: (origin, callback) => {
    console.log(origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/navs", function (req, res) {
  console.log(`GET ${req.url}`);
  res.send(NAVS);
});

app.get("/themes/:theme", function (req, res) {
  console.log(`GET ${req.url} with PARAMS theme = ${req.params.theme}`);
  const theme = req.params.theme;
  switch (theme) {
    case "react":
      const themes = REACT_THEMES.map((item) => {
        const { lessons, ...rest } = item;
        return {
          ...rest,
          progress: getProgress(lessons),
        };
      });
      res.send(themes);
      break;
    default:
      res.send([]);
      break;
  }
});

app.get("/themes/:theme/:id", function (req, res) {
  console.log(
    `GET ${req.url} with PARAMS theme = ${req.params.theme}, id = ${req.params.id}`
  );
  const theme = req.params.theme;
  const id = Number(req.params.id);
  switch (theme) {
    case "react":
      const item = REACT_THEMES.find((item) => item.id === id);
      const { lessons, title, ...rest } = item;
      const result = {
        title,
        lessons,
        progress: getProgress(lessons),
      };
      res.send(result);
      break;
    default:
      res.send({});
      break;
  }
});

app.post("/login", function (req, res) {
  console.log(`POST ${req.url} with PARAMS user = ${JSON.stringify(req.body)}`);
  const user = req.body;
  const foundUser = USERS.filter((item) => item.username === user.login)[0];
  if (foundUser) {
    res.send({
      username: foundUser.username,
      token: foundUser.token,
    });
  } else {
    res.sendStatus(400);
  }
});

const port = process.env.PORT || 9000;
app.listen(port, function () {
  console.log(`Server listening port ${port}`);
});
