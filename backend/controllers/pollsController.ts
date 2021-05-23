const request = require("request");

let url = "https://polls.apiblueprint.org/questions";

let options = { json: true };

module.exports = {
  pollResultsFetch(req, res) {
    request(url, options, (error, urlRes, body) => {
      if (error) {
        return console.error(error);
      }

      if (!error && urlRes.statusCode === 200) {
        res.status(200).json(body);
      }
    });
  },
};
