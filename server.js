const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    const slack_name = req.query.slack_name;
    const track = req.query.track;
    const currentDate = new Date();

    const year = currentDate.getUTCFullYear();
    const month = String(currentDate.getUTCMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getUTCDate()).padStart(2, "0");
    const hours = String(currentDate.getUTCHours()).padStart(2, "0");
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getUTCSeconds()).padStart(2, "0");

    const formattedUTC = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

    const days = [
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
        current_day: days[new Date().getDay()],
        utc_time: formattedUTC,
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
