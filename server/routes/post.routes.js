const router = require("express").Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer();

// posts
router.get("/", postController.readPost);
router.post("/", upload.single("file"), postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

//likes
router.patch("/like-post/:id", postController.likePost);
router.patch("/unlike-post/:id", postController.unlikePost);

//comments
router.patch("/comment-post/:id", postController.commentPost);
router.patch("/edit-comment-post/:id", postController.editCommentPost);
router.patch("/delete-comment-post/:id", postController.deleteCommentPost);
router.patch("/like-comment-post/:id", postController.likeCommentPost);

module.exports = router;
