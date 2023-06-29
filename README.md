# MWA Homework - Express
## To receive credit for this homework, make sure you meet the following requirements:
* Create a `.gitignore` file and make sure not to push the `node_modules` folder to GitHub.
* All files must have a `.ts` extension.
* Do not submit any compressed `.zip` files.
* Homework deadline submission is 9:00 PM.
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
* Implement the routes for the following CRUD operations for blogs and tags and use the proper HTTP verbs:
    *  get all blog posts 
    *  get one blog post by the blog ID
    *  add a new blog post (title and body)
    *  update a blog post title and body by the blog ID
    *  remove a blog post by the blog ID
    *  get all tags that belong to a blog ID
    *  get one tag by the tag ID, that belongs to a blog ID
    *  add a new tag
    *  update a tag by the tag ID, that belongs to a blog ID
    *  remove a tag by the tag ID, that belongs to a blog ID     
* Test with any client extension or app (Do not build UI).
* Your API accepts and returns `JSON` data from/to req/res body.
* Log all requests to a file `access.log` using `morgan` middleware. 
* For all add and update routes of the `blogs` entity, create and apply a custom middleware to verify if the `title` and `body` values are not null, and the `title` has a minimum of 100 chars. If not, send an error response.
  
**Optional Requirement:**   
  
Add a property `"pictures": [{"_id": "1", "filename": "1570286884.jpg"}, {"_id": "2", "filename": "1570286885.jpg"}]` to your `blogs` entity, and create two API endpoints, one to upload and another to download the picture(s) by the picture `_id` property.
  
* Use a middleware to upload the blog's picture into a directory `./uploads`.
* You may use `multer` or any other middleware to upload binary/multipart files.
```typescript
// update your interface as follows:
interface IPicture {_id: string, filename: string}
interface IBlog {_id: string, title: string, body: string, tags: ITag[], pictures: IPicture[]}
```
