var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // if (req.user) {
    //   res.redirect("/survey");
    // }
    res.render("index", {});
  });

  app.get("/candidates", function(req, res) {
    db.Candidate.findAll({}).then(function(result) {
      res.render("allCandidates", {
        Candidates: result
      });
    });
  });

  app.get("/register", function(req, res) {
    res.render("register", {});
  });
  app.get("/home", function(req, res) {
    res.render("index-logged-in", {});
  });
  app.get("/logout", function(req, res) {
    res.render("index", {});
  });

  /*   app.get("/comments", function(req,res) {
    db.Comment.findAll({}).then(function(result)) {
      res.render("")
    }
  }) */

  // Load example page and pass in an example by id
  /* 
  app.get("/candidates/:fullName", function(req, res) {
    db.Candidate.findOne({ where: { fullName: req.params.fullName } }).then(
      function(dbCandidates) {
        res.render("candidate", {
          Candidate: dbCandidates,
        });
      }
    );
  }); */
  app.get("/candidates/:fullName", function(req, res) {
    db.Candidate.findOne({ where: { fullName: req.params.fullName } }).then(
      function(dbCandidates) {
        db.Comment.findAll({ where: { source: req.params.fullName } }).then(
          function(dbComments) {
            res.render("candidate", {
              Candidate: dbCandidates,
              Comments: dbComments
            });
          }
        );
      }
    );
  });
  //for survey
  app.get("/survey", isAuthenticated, function(req, res) {
    res.render("survey", {});
  });
  // Render 404 page for any unmatched routes

  app.get("*", function(req, res) {
    res.render("404");
  });
};
