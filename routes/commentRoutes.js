var db = require("../models");

module.exports = function(app) {
  // Get all Comment
  app.get("/api/comments", function(req, res) {
    db.Comment.findAll({}).then(function(dbComments) {
      res.json(dbComments);
      console.log(dbComments);
    });
  });
  // Create a new Comment

  app.post("/api/comments", function(req, res) {
    db.Comment.create(req.body).then(function(dbComments) {
      //     res.redirect("/api/comments");
      res.json(dbComments);
    });
  });

  // Get a Candidates by id NOT NEEDED
  /*   app.get("/api/commment/:id", function(req, res) {
    db.Comment.findOne({ where: { id: req.params.id } }).then(function(dbComments) {
      // res.render("candidate", { Candidates: dbComments });
      res.send(dbComments);
    });
  }); */
  // Delete a Candidate by id
  app.delete("/api/comments/:id", function(req, res) {
    db.Comment.destroy({ where: { id: req.params.id } }).then(function(
      dbComment
    ) {
      res.json(dbComment);
      console.log("destroyed: ", dbComment);
    });
  });
};
