server.get("/api/nests"); // request for all nests in database
server.get("/api/nests/:nid"); // particular nest in database

server.post("/api/auth/register"); // user register/signup
server.post("/api/auth/login"); // user login/signin

server.get("/api/nest/bookings"); // all the bookings user has done
server.post("/api/nest/bookings/create"); // create a booking
server.delete("/api/nest/bookings/delete"); // delete a booking
server.get("/api/nest/favs"); // fav nests

server.get("api/user/nests"); // all the nests user have created
server.post("/api/user/nest/create"); // create a nest
server.delete("api/user/nest/remove"); // delete a nest
server.put("api/user/nest/update"); // update an existing nest
server.get("api/user/nest/bookings"); // users that have booked your nest

server.get("api/profile"); // user profile
server.put("api/profile/update"); // profile update
server.delete("api/profile/remove"); // delete profile
