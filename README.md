# React Redux Readable

Project developed for [React Nanodegree at Udacity](https://eu.udacity.com/course/react-nanodegree--nd019).
The bootstrap of this project was forked from this [repo](https://github.com/udacity/reactnd-project-readable-starter).

For the bootstrap and setup [Create React App](https://github.com/facebookincubator/create-react-app) was used.

## The Project

The project consists in a stateful frontend application with similar functions of the ones found in a blog, for example:

```
- Read posts
- Filter posts by category
- Order posts by `date`, `score` and `author`
- Upvote or Downvote a post
- Upvote or Downvote a comment
- Comment in a post
- Create a new post
```

Since there is no strong authentication, the application focuses in a moderator user, with all permissions, being able to:

```
- Edit a post
- Remove a post
- Edit a comment
- Remove a comment
```

The main focus here is to have an application built with `React`, with central state using `Redux`, and dispatching actions though `Thunk`

## Technical

> All the commands shown on this section comprise both package managers: **yarn** and **npm**

### To Run

In order to run the project.

1. Clone the repository

```bash
git clone git@github.com:castrodrigo/react-redux-readable-project
```

2. Inside the cloned folder

- 2.1 Enter in `frontend` folder

- 2.1.a Install the packages with: **[yarn](https://yarnpkg.com/lang/en/)** or **[npm](https://www.npmjs.com/)**

```bash
yarn
```

```bash
npm install
```

- 2.1.b After installing the packages, to run the app:

```bash
yarn start
```

```bash
npm start
```

- 2.1.c The application will be available at port 3000. `http://localhost:3000` and will try to connect to port `3001` where the `api-server` lies.

- 2.2 In another terminal window, Enter in `api-server` folder

- 2.2.a Install the packages with: **[yarn](https://yarnpkg.com/lang/en/)** or **[npm](https://www.npmjs.com/)**

```bash
yarn
```

```bash
npm install
```

- 2.2.b After installing the packages, to run the app:

```bash
yarn start
```

```bash
npm start
```

- 2.2.c The application will be available at port 3001. `http://localhost:3001`

### Tests

The appllications contains tests using `Jest` and `Enzyme`

1. Run tests

```bash
yarn test
```

```bash
npm run test
```

2. Run test coverage

```bash
yarn test --coverage
```

```bash
npm run test --coverage
```

### Project URLS

- Dashboard Page `http://localhost:3000/`
- New Post Page `http://localhost:3000/new`
- Edit Post Page `http://localhost:3000/edit/:post`
- Category Page `http://localhost:3000/:category`
- Post Page `http://localhost:3000/:category/:post`

### Backend Server

The API/Mock-serve used in this project was provided by Udacity and lies in `api-server` folder

### Improvements

- Increase DRY
- Reduce Class Components as Containers, moving to MergeProps
- Increase coverage
- Break some big and complex components into smaller ones
