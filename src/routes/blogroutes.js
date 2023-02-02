const express = require('express');
const Blogs = require('../models/blogs');
import blogVal from '../midleware/blogmidleware';
// import verifyToken from '../midleware/jwtAuth';
import {getBlogs, insertBlog, deleteBlog, updateBlog, getOneBlog, commentside} from '../controllers/blogcontroller'
// const insertBlog = require('../controllers/blogcontroller')
const router = express.Router();

// Swagger documentation
/**
 * @swagger
 * components:
 *  responses:
 *           200:
 *               description: Success
 *           400:
 *               description: Bad request
 *           401:
 *               description: Authorization
 *           404:
 *               description: Not found
 *           500:
 *               description: Unexpected error.
 *  schemas:
 *      Blogs:
 *          type: object
 *          required:
 *              -title
 *              -image
 *              -body
 *          properties:
 *              title:
 *                  type: string
 *                  description: title of blog
 *              image:
 *                  type: string
 *                  description: blog's image
 *              body:
 *                  type: string
 *                  description: the whole stoory
 *          example:
 *              title: education is better than war.
 *              image: hdfjgkhlkjghjghjghh
 *              body: for real education hide everything we need
 *  parameters:
 *           blogId:
 *              name : id
 *              in : path
 *              description: Id for specified blogId
 *              required: true
 *              schema:
 *                 type: string
 */

/**
 * @swagger
 * tags:
 *  name: Blogs
 *  description: All Blogs created
 */

//Get all blogs created
/**
 * @swagger
 * /blogs:
 *  get:
 *    summary: getting all blogs published
 *    tags: [Blogs]
 *    responses:
 *          200:
 *            description: All blogs is here!
 *            content:
 *              application/json:
 *                schema:
 *                  type: array
 *                items:
 *                  $ref: '#/components/schemas/Blogs'
 */


router.get('/blogs', getBlogs)

//creating blogs
/**
 * @swagger
 * /blogs:
 *    post:
 *      summary: creating blog
 *      tags: [Blogs]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Blogs'
 *      responses:
 *          200:
 *              description: Blogs Created Successfully!
 *          400:
 *              $ref: '#/components/responses/400'
 * 
  */


router.post('/blogs',blogVal, insertBlog)

//deleting blog

/**
* @swagger
* /blogs/{id}:
*  delete:
*   summary: Delete one blog
*   tags: [Blogs]
*   parameters:
*          - $ref: '#/components/parameters/blogId'
*   responses:
*      200:
*        description: Complite deleted
*      401:
*        description: Unauthorized
*      404:
*        description: not found 
*/

router.delete('/blogs/:id', deleteBlog)

//updating blogs
/**
 * @swagger
 * /blogs/{id}:
 *  patch:
 *      summary: updating blogs
 *      tags: [Blogs]
 *      parameters:
 *          - $ref: '#/components/parameters/blogId'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/Blogs'
 *      responses:
 *          200:
 *              description: Success update
 *          400:
 *              $ref: '#/components/responses/400'
 *          401: 
 *              $ref: '#/components/responses/401'
 *          404:
 *              description: not found  
 */

router.patch('/blogs/:id', updateBlog)

/**
 * @swagger
 * /blogs/{id}:
 *  get:
 *      summary: Getting one blog by id
 *      tags: [Blogs]
 *      parameters:
 *            - name : id
 *              in : path
 *              schema:
 *                  type: string
 *              description: Id of specific id
 *              required: true
 *      responses:
 *          200: 
 *              description: specified messages
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Blogs'
 *          404: 
 *              $ref: '#/components/responses/404'
 */


router.get('/blogs/:id', getOneBlog)
router.post("/blogs/comments/:id", commentside)
module.exports = router
