const router = require("express").Router();
const articlesController = require("../../nyt-react/controllers");

// match it up with api/articles
router.route("/")
    .get(articlesController.findAll)
    .post(articlesController.create);

// match with api/books/:id
router
    .route("/:id")
    .get(articlesController.findbyID)
    .put(articlesController.update)
    .delete(articlesController.remove);

module.exports = router;