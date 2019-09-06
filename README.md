# MWA Homework06 - Expressjs 02
## Exercise
Create an Express application that implements a Restful Stateless API for an entity called `grades` as following:
```javascript
const grades = [{id: 1, name: "Asaad Saad", course: "CS572", grade: 95}]
```
* Take into consideration that `grades` entity is an immutable data structure.
* Write routes for the following CRUD operations and use the proper HTTP verbs (`GET` one and all, `POST`, and `DELETE`).
* Test with `HTTP Client` extension for VSCode.
* Your API accepts and returns `JSON` data.
* Log all requests to a file `access.log` using `morgan` middleware. 
* Write a custom middleware to verify if a user passes a `JSON` object that contains `id`, `name`, `course` and `grade`, otherwise send back an error.
* Accept cross-domain XHR requests using `cors` middleware.
**Note: Add `node_modules` folder to your `.gitignore` file. You should only push your code along with `package.json` and `package-lock.json`**

