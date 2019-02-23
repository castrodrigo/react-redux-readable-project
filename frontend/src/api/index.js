import { get, post, put, remove } from "./protocol";

const api = "http://localhost:3001";

// get all categories
export const getCategories = () =>
  get(`${api}/categories`)
    .then(res => res.json())
    .then(data => data.categories);

// get all posts
export const getPosts = () => get(`${api}/posts`).then(res => res.json());

// get all posts from category
export const getCategoryPosts = category =>
  get(`${api}/${category}/posts`).then(res => res.json());

// get a post
export const getPost = id => get(`${api}/posts/${id}`).then(res => res.json());

// add a post
export const addPost = payload =>
  post(`${api}/posts`, payload).then(res => res.json());

// update a post
// PUT /posts/:id

// vote a post
// POST /posts/:id

// delete a post
// DELETE /posts/:id

// get all Comments from Post
export const getComments = post =>
  get(`${api}/posts/${post}/comments`).then(res => res.json());

// add a comment
export const addComment = payload =>
  post(`${api}/comments`, payload).then(res => res.json());

// get a comment
export const getComment = id =>
  fetch(`${api}/comments/${id}`).then(res => res.json());

// vote a comment
// POST /comments/:id

// update a comment
// PUT /comments/:id

// delete a comment
// DELETE /comments/:id
