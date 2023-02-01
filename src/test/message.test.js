import Messages from "../models/messages";
import request from "supertest";
import app from "../../app";

const allMessages = async() =>{
    const message = await request(app).post('/messages').send({
        username: "zeden12",
        email: "kwizeraenez@gmail.coom",
        idea: "always i will give you a true info"
    });
    return message

}

test ('getting all messages', async() =>{
    const response = await request(app).get('/messages');
    expect(response.statusCode).toBe(200)
})

test ('create message', async() =>{
    const response = await allMessages()
    expect(response.statusCode).toBe(200)
})

test ('update messages', async() =>{
    const response = await allMessages()
    const id = response.body._id
    const update = await request(app).patch(`/messages/${id}`).send({
        username: "zeden12",
        email: "kwizeraernez@gmail.com",
        idea: "always i will give you a true info 123456"
    })
    expect(update.statusCode).toBe(200)
})

test ('delete message', async() =>{
    const response = await allMessages()
    const id = response.body._id
    const del = await request(app).delete(`/messages/${id}`)
    expect(del.statusCode).toBe(200)
})