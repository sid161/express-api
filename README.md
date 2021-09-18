# express-api

#express-api
# API deployed at : 
https://express-interview-api.herokuapp.com/
---
## Register a user: (no auth)
POST /users/signup
sample data
```
{
    "newUser": {
        "_id": "6145bb75040d609153bcf2ed",
        "name": "user4",
        "email": "user4@gmail.com",
        "mobile": 67890,
        "password": "$2b$10$0KP3pmzd1gcfDPLBf8YEtuSESxtRaIWdVdrtKCzm2DwtU3QPnsrvu",
        "userType": "normal",
        "createdAt": "2021-09-18T10:12:05.168Z",
        "updatedAt": "2021-09-18T10:12:05.168Z",
        "__v": 0
    }
}
```
Returns a user:
```
{
    "newUser": {
        "_id": "6145bb75040d609153bcf2ed",
        "name": "user4",
        "email": "user4@gmail.com",
        "mobile": 67890,
        "password": "$2b$10$0KP3pmzd1gcfDPLBf8YEtuSESxtRaIWdVdrtKCzm2DwtU3QPnsrvu",
        "userType": "normal",
        "createdAt": "2021-09-18T10:12:05.168Z",
        "updatedAt": "2021-09-18T10:12:05.168Z",
        "__v": 0
    }
}
```
status: working
---
## Login a user (no auth)
POST api/users/login
sample data
```
{
   
    "email":"user4@gmail.com",
    "password":"12345"
    
   
   
}
```
Returns a user:
```
{
    "name": "user4",
    "email": "user4@gmail.com",
    "userType": "normal",
    "mobile": 67890,
    "token": "xyz"
}
```
status:working
---
## post routes
## Create an post: 
POST /post
sample data
```

```
Returns a event:
```

0
```
status:working
---
## Get a list of posts ( auth)
GET /post
Returns a post object:
```
{"postData":[{"_id":"6144ff870b363f9e19d3eebe","title":"title1","message":"message1","comments":[],"likes":[],"createdAt":"2021-09-17T20:50:15.195Z","updatedAt":"2021-09-17T20:50:15.195Z","__v":0},{"_id":"6144ffed0b363f9e19d3eec0","title":"titledemo","message":"message2","comments":[],"likes":[],"createdAt":"2021-09-17T20:51:57.669Z","updatedAt":"2021-09-17T21:41:01.223Z","__v":0}]}
```
status:working
---
