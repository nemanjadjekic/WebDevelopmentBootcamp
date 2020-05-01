//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

const articleShema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articleShema);

/**
 * Requests Targeting All Articles
 */
app
  .route("/articles")
  .get(function (req, res) {
    Article.find(function (err, foundArticles) {
      if (err) {
        res.send(err);
      } else {
        res.send(foundArticles);
      }
    });
  })
  .post(function (req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    newArticle.save(function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully added a new article!");
      }
    });
  })
  .delete(function (req, res) {
    Article.deleteMany(function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully deleted all articles!");
      }
    });
  });

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

/**
 * Requests Targeting A Specific Article
 */
app
  .route("/articles/:articleTitle")
  .get(function (req, res) {
    Article.findOne({ title: req.params.articleTitle }, function (
      err,
      foundArticle
    ) {
      if (err) {
        res.send(err);
      } else {
        if (foundArticle) {
          res.send(foundArticle);
        } else {
          res.send("No Article found!");
        }
      }
    });
  })
  .put(function (req, res) {
    Article.update(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      function (err) {
        if (err) {
          res.send(err);
        } else {
          res.send("Successfully updated article!");
        }
      }
    );
  })
  .patch(function (req, res) {
    Article.update(
      { title: req.params.articleTitle },
      { $set: req.body },
      function (err) {
        if (err) {
          res.send(err);
        } else {
          res.send("Successfully patched Article!");
        }
      }
    );
  })
  .delete(function (req, res) {
    Article.deleteOne({ title: req.params.articleTitle }, function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully deleted Article!");
      }
    });
  });