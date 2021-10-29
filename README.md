Blog React APP

url	component
  /	Home
  /users	UsersList
  /users/:id	UserPage

Description:

api/
api-user.js - create request to API

hooks/
useData.js - takes the path of the request and makes a request to the server, returning the received data

Blog.js - Site routing

user/

UsersList.js - container for displaying information for all users
UserItem.js - component for displaying short info about user on UsersList.js
UserItem.js - component for displaying full info about selected user
