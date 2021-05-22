const request = require("request");

let url = "https://polls.apiblueprint.org/questions";

let options = { json: true };

module.exports = {
  pollResultsFetch(req, res) {
    request(url, options, (error, urlres, body) => {
      if (error) {
        return console.error(error);
      }

      if (!error && urlres.statusCode === 200) {
        res.status(200).json(body);
      }
    });
  },
};
