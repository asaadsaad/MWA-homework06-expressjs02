# MWA Homework - Express
## Exercise
Create an Express application that implements a Restful Stateless API for an entity called `meals` that has sub-entity called `ingredients`:
```javascript
let meals = [{
    "_id": "1", 
    "name": "Spaghetti Bolognese", 
    "ingredients": [
         {"_id": "1", "name": "olive oil", "amount": "1 1/2 tbsp"}, 
         {"_id": "2", "name": "garlic cloves", "amount": "2" }
    ],
}]
```
* Have in mind to have a separation between the Routing layer and the Controllers layer. 
* Implement the routes for the following CRUD operations for courses and students and use the proper HTTP verbs (`GET` one and all,`POST`, `PUT`, and `DELETE`).
* Test with any client extenstion or app (Do not build UI).
* Your API accepts and returns `JSON` data from/to req/res body.
* Log all requests to a file `access.log` using `morgan` middleware. 
* For your `POST` and `PUT` routes on the `meals` entity, create and apply a custom middleware to verify if a the `name` value is not null, otherwise send back an error.
  
**Note: Add `node_modules` folder to your `.gitignore` file. You should only push your code along with `package.json` and `package-lock.json`**
  
**Optional Requirements:** 
* Add a property `"pictures": [{"_id": "1", "filename": "1570286884.jpg"}, {"_id": "2", "filename": "1570286885.jpg"}]` to your `meals` entity.
* Use a middleware to upload the meal's picture into a directory `./assets/pics`, only `.jpg` files should be accepted and picture size should not exceed `5 MB`, files should be renamed to represent Unix timestamps. Note that this request must have a `content-type` of `"multipart/form-data"`. *(You may use `multer` or `formidable` middlewares)*
* Define a middleware to serve all static images of `./pictures/*` from `./assets/pics/*`.
* Explore the possibility of uploading the files to a cloud service like S3.
