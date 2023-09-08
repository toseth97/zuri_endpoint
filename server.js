const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    const slack_name = req.query.slack_name;
    const track = req.query.track;
    const day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const result = {
        slack_name: slack_name,
        current_day: day[new Date().getDay()],
        utc_time: new Date(),
        track: track,
        github_file_url:
            "https://github.com/toseth97/zuri_endpoint/blob/main/server.js",
        github_repo_url: "https://github.com/toseth97/zuri_endpoint/",
        status_code: 200,
    };

    res.send(result);
});

app.listen(3300, () => {
    console.log("server running");
});
