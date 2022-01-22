# NODE BOOKS ADMIN
---

## ON ROUTING AND API SERVERS

This repo contains an example of setting up basic routing using **express** in a node runtime environment. 

Routing determines how an application responds to a client request. The response depends on the **path**, **request** and **method** (of answering the request) used as follows:

``` app.method(path, handler) ```

Where:

+ app is an instance of express (such as ``` const app = express(); ```)
+ method is an http request method (such as ```get```, ```send```, ```post``` and ```delete```)
+ path is a path on the server (such as ```"/"```, ```"/books"```, ```"/books/the-lord-of-the-rings"```)
+ handler is the function executed when the route (path + method) is matched

Example of defining a route for the client to read the data.

```
app.get("/books", (req, res) => {
  res.json(books); 
});
 ```

---
**Notes on setting up a collaborative dev environment**

1. Create a folder and ```$ git init``` 
2. ```$ touch .gitignore``` and edit to ignore "node_modules" and "package-lock.json"
2. ```$ npm init -y ```
3. ```$  npm i -D jest supertest```
4. ```$ npm i cors express nodemon```
4. edit package.json to contain
```
 "scripts": {
    "test": "jest --watchAll",
    "start": "node server.js",
    "dev": "nodemon index.js"
   },
```

**Organizing the content**

1. Create ```index.js```, the "main" file, used to launch the server 
2. Create ```server.js``` to store the server functions
3. Create ```data.js``` to store the data that clients can interact with

**Testing the API manually**

1. Testing can be done on this website: https://hoppscotch.io/
