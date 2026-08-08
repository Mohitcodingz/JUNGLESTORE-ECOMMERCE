flow

---------------backend--
1. create the .env which is just text file contains the port , db url , json token key and important files so we will import it on other files to use.
2. create app.js for just require the express , cors and export it.
3. create server.js for creating the server and make sure you use the env.process.port for future backend deployenent port changes. we will also import any files here that we want to run in the backend server starting flow.
4. db.js here you create the function that connects the server with the mongodb. for that we require mongoose.connect and etc we export and import in server.js right before the app.listen.
5. Remeber that bcrypt is used for converting the normal password into diff special character and then we match that bcrypt registered saved password in the mongodb with the login password input if it matches then we send the token using jwt(jsonwebtoken that is created using the myseretkey+user._id+payload info) that verfiy and gives access to the login user.
