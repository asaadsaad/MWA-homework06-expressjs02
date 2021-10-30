# MWA Homework06 - Expressjs 02
## Exercise
Create an Express application that implements a Restful Stateless API for an entity called `students`:
```javascript
const students = [{id: 1, name: "Asaad Saad", course: "CS572", picture: "1570286884.jpg", grade: 95}]
```
* Take into consideration that `students` entity should be treated as an immutable data structure.
* Have in mind to have a separation between the Routing layer and the Controllers layer. 
* Write routes for the following CRUD operations and use the proper HTTP verbs (`GET` one and all, `POST`, and `DELETE`).
* Test with `HTTP Client` extension for VSCode. (or any other client)
* Your API accepts and returns `JSON` data.
* Log all requests to a file `access.log` using `morgan` middleware. 
* For your `POST` route, use a middleware to upload the student's picture into a directory `./assets/pics`, only `.jpg` files should be accepted and picture size should not exceed `3 MB`, files should be renamed to represent Unix timestamps. Note that this request has a `content-type` of `"multipart/form-data"`
* For your `POST` route, create and apply a custom middleware to verify if a the `JSON` object contains `name`, `course` and `grade`, otherwise send back an error.
* Define a middleware to serve all static images of `./picture/*` from `./assets/pics/*`.
* Accept all cross-domain XHR requests using `cors` middleware.  
  
**Note: Add `node_modules` folder to your `.gitignore` file. You should only push your code along with `package.json` and `package-lock.json`**

