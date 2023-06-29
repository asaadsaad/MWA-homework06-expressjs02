# MWA Homework - Express
## Notes
* Create a `.gitignore` file and make sure not to push the `node_modules` folder to GitHub.
* All files must have a `.ts` extension.
* Do not submit any compressed `.zip` files.
* Using the type `any` is not allowed, all objects must be typed.
* Use the `RequestHandler<ReqParamsType, ResBodyType, ReqBodyType, ReqQueryParamsType>` type for all request handlers functions.
* Refer to the code honor submission policy in the syllabus.
## Exercise
Create an Express application using TypeScript that implements a Restful Stateless API for an entity called `blogs` that has a sub-entity called `tags`:
```typescript
interface ITag {_id: string, tag: string}
interface IBlog {_id: string, title: string, body: string, tags: ITag[]}

let blogs : IBlog[] = [{
    "_id": "1", 
    "title": "Lorem Ipsum", 
    "body": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    "tags": [
         {"_id": "1", "tag": "Lorem" }, 
         {"_id": "2", "tag": "Ipsum" }
    ],
}]
```
* Your model layer consists of an array of blogs, persisted in memory as `IBlog[]`.
* Have in mind to have a separation between `blogs` and `tags` Routing and Controller layers. 
* Implement the routes for the following CRUD operations for meals and ingredients and use the proper HTTP verbs (`GET` one and all, `POST`, `PUT`, and `DELETE`).
* Test with any client extension or app (Do not build UI).
* Your API accepts and returns `JSON` data from/to req/res body.
* Log all requests to a file `access.log` using `morgan` middleware. 
* For your `POST` and `PUT` routes on the `meals` entity, create and apply a custom middleware to verify if the `title` value is not null, otherwise, send back an error.
  
**Optional Requirement:**   
  
Add a property `"pictures": [{"_id": "1", "filename": "1570286884.jpg"}, {"_id": "2", "filename": "1570286885.jpg"}]` to your `blogs` entity, and create two API endpoints, one to upload and another to download the pictures.
  
* Use a middleware to upload the meal's picture into a directory `./uploads`.
* You may use `multer` or any other middleware to upload binary/multipart files.
```typescript
// update your interface as follows:
interface IPicture {_id: string, filename: string}
interface IBlog {_id: string, title: string, body: string, tags: ITag[], pictures: IPicture[]}
```
