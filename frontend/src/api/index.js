const api = "http://localhost:3001";
let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token
};

// get all Categories
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

// get all Posts
export const getPosts = () =>
  fetch(`${api}/posts`, { headers }).then(res => res.json());

// get all Posts from Category
export const getCategoryPosts = category =>
  fetch(`${api}/${category}/posts`, { headers }).then(res => res.json());

// get a Post
export const getPost = id =>
  fetch(`${api}/posts/${id}`, { headers }).then(res => res.json());

// add a Post
// POST /posts

// update a post
// PUT /posts/:id

// vote a post
// POST /posts/:id

// delete a post
// DELETE /posts/:id

// get all Comments from Post
export const getComments = post =>
  fetch(`${api}/posts/${post}/comments`, { headers }).then(res => res.json());

// add a comment
// POST /comments

// get a comment
export const getComment = id =>
  fetch(`${api}/comments/${id}`, { headers }).then(res => res.json());

// vote a comment
// POST /comments/:id

// update a comment
// PUT /comments/:id

// delete a comment
// DELETE /comments/:id
