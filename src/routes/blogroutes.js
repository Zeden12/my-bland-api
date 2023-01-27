const express = require('express');
const Blogs = require('../models/blogs');
import blogVal from '../midleware/blogmidleware';
import {getBlogs, insertBlog, deleteBlog, updateBlog, getOneBlog, commentside} from '../controllers/blogcontroller'
// const insertBlog = require('../controllers/blogcontroller')
const router = express.Router();
router.get('/blogs', getBlogs)
router.post('/blogs',blogVal, insertBlog)
router.delete('/blogs/:id', deleteBlog)
router.patch('/blogs/:id', updateBlog)
router.get('/blogs/:id', getOneBlog)
router.post("/blogs/comments/:id", commentside)
module.exports = router
