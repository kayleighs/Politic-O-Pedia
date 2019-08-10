var db = require("../models");

module.exports = function(app) {
  // Get all Candidatess
  app.get("/api/candidates", function(req, res) {
    db.Candidate.findAll({}).then(function(dbCandidates) {
      res.json(dbCandidates);
      console.log(dbCandidates);
    });
  });
  // Create a new Candidates

  /*   app.post("/api/Candidates", function (req, res) {
    db.Candidates.create(req.body).then(function (dbCandidates) {
      res.redirect("/api/candidates")
    });
  }); */

  // Get a Candidates by id NOT NEEDED
  /*   app.get("/api/candidates/:id", function(req, res) {
    db.Candidate.findOne({ where: { id: req.params.id } }).then(function(dbCandidates) {
      // res.render("candidate", { Candidates: dbCandidates });
      res.send(dbCandidates);
    });
  }); */
  // Delete a Candidate by id
  /*   app.delete("/api/candidates/:id", function (req, res) {
    db.Candidates.destroy({ where: { id: req.params.id } }).then(function (dbCandidate) {
      console.log("destroyed: ", dbCandidate)
      db.Candidates.findAll({}).then(function (allCandidates){
        res.render("candidates", { candidates: allCandidates })
      })
    });
  }); */
};
