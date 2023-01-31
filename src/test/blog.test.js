import Blogs from "../models/blogs";
import request from "supertest"
import app from "../../app"

const allBlogs = async() =>{
    const blog = await request(app).post('/blogs').send({
        title: "my first blog",
        image: "ljkhjygthrfgyhu",
        body: "always i will give you a true info"
    });
    return blog

}
test ('getting all blogs', async() =>{
    const response = await request(app).get('/blogs');
    expect(response.statusCode).toBe(200)
})

test ('create blog', async() =>{
    const response = await allBlogs()
    expect(response.statusCode).toBe(200)
})

test ('update blog', async() =>{
    const response = await allBlogs()
    const id = response.body._id
    const update = await request(app).patch(`/blogs/${id}`).send({
        title: "my first blog sdsdgthyu",
        image: "ljkhjygthrfgyhu 2637354",
        body: "always i will give you a true info 123456"
    })
    expect(update.statusCode).toBe(200)
})

test ('delete blog', async() =>{
    const response = await allBlogs()
    const id = response.body._id
    const del = await request(app).delete(`/blogs/${id}`)
    expect(del.statusCode).toBe(200)
})