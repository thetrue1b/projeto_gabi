const { Router } = require('express');
const router = Router();
const upload = require('../config/multer');

const {
    storePost,
    posts
} = require('../controllers/postController');

router.post('/post/create', upload.single('img_post'), storePost);
router.get('/posts', posts);

module.exports = router;