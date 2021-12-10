#  Blog React APP

The object of the project is the creation of a multifaceted site in which requests for a general list and individual elements are implemented.

url	          component

/	            Home
  
/users	      UsersList
  
/users/:id	  UserPage


Description:
__________________________________________________________________________________________________________

api/
+ api-user.js - create request to API

__________________________________________________________________________________________________________

hooks/

+  useData.js - takes the path of the request and makes a request to the server, returning the received data

___________________________________________________________________________________________________________

Blog.js 

user/
+  UsersList.js - container for displaying information for all users
+  UserItem.js - component for displaying short info about user on UsersList.js
+  UserItem.js - component for displaying full info about selected user
