import Users from "../models/users";
import request from "supertest";
import app from "../../app";

const allUsers = async() =>{
    const users = await request(app).post('/users').send({
        username: "zeden12",
        email: "kwizeraenez@gmail.coom",
        password: "cj zeden123"
    });
    return users

}

test ('getting all users', async() =>{
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200)
})

test ('create user', async() =>{
    const response = await allUsers()
    expect(response.statusCode).toBe(200)
})

test ('update users', async() =>{
    const response = await allUsers()
    const id = response.body._id
    const update = await request(app).patch(`/users/${id}`).send({
        username: "zeden134",
        email: "kwizeraern@gmail.com",
        password: "cj zeden123456"
    })
    expect(update.statusCode).toBe(200)
})

test ('delete user', async() =>{
    const response = await allUsers()
    const id = response.body._id
    const del = await request(app).delete(`/users/${id}`)
    expect(del.statusCode).toBe(200)
})