const cloudinary = require('../cloudinary');
const Blogs = require('../models/blogs')
const getBlogs = async(req,res)=>{
    try {
        const blogs = await Blogs.find();
    res.status(200).send(blogs);
    } 
    catch (error) {
        res.status(500).send('server error')
    }
    
};

const insertBlog =  async(req,res)=>{
    try {
        let currentDate = new Date().toDateString();
        const imgUpload = await cloudinary.uploader.upload(req.body.image, {folder: 'zed_image'})
        const insBlog = new Blogs({
            title: req.body.title,
            image: {
                public_id: imgUpload.public_id,
                url: imgUpload.secure_url
            },
            body: req.body.body,
            author: req.body.author,
            date: currentDate
        })
        const blog = await insBlog.save();
        res.json(blog);
    } catch (error) {
        res.status(500).json('server error')
    }
   
}

const deleteBlog = async(req, res)=> {
    try {
        const id = req.params.id
        await Blogs.deleteOne({
            _id: id
        })
        res.status(200).json('Blog deleted successfull')
        
    } catch (error) {
        console.log(error)
        res.status(404).json()
        
    }
}

const updateBlog = async (req, res) => {
	try {
		const id = req.params.id
        const Blog = await Blogs.findOne({ 
            _id: id })

		if (req.body.title) {
			Blog.title = req.body.title
		}

        if (req.body.image) {
			Blog.image = req.body.image
		}

		if (req.body.body) {
			Blog.body = req.body.body
		}

        if (req.body.author) {
			Blog.author = req.body.author
		}

		await Blog.save()
		res.send(Blog)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
}

const getOneBlog = async(req,res)=>{
    try {
        const id = req.params.id
       const Blog = await Blogs.findOne({
            _id: id
        })
        res.status(200).json(Blog)
        
    } catch (error) {
        console.log(error)
        res.status(404).json("blog not found")
        
    }}

    const commentside = async (req, res) => {
        try {
            const id = req.params.id
            const blog = await Blogs.findOne({ 
                _id: id 
            });
          const comment = new Comment({
            _id: id ,
            username: req.body.username,
            comment: req.body.comment
          });
          await comment.save();
          blog.comments.push(comment);
          await blog.save();
          return res.status(200).json({ newComment: comment });
        } catch {
          return res.status(404).json({ error: "Blog doesn't exist!" });
        }
      };

module.exports = {getBlogs, insertBlog, deleteBlog, updateBlog, getOneBlog, commentside}
// module.exports = getBlogs
// module.exports = insertBlog