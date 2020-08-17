# Explore Hidden Gems
The App's main concept is to be a platform where Users can view and/or post Must-visit locations. The app offers GPS functionality, a rating system, sorting based on distance between users and suggested location and more.

The app is dynamic and designed for tablet and PC (mobile version coming soon).
All constructive feedback is welcome! you can contact me [here](www.linkedin.com/in/antony-smit) :point_left:

## Endpoints
| Method |          Path          |                                                                 Purpose                                                                |                                     Required arguments                                    |
|:------:|:----------------------:|:--------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------:|
|  POST  | /auth/signup           | To create a new user account, this includes a token.                                                                                   | Email, Password & Email                                                                   |
|  POST  | /auth/login            | To login with existing account, stores token in localStorage.                                                                          | Email & Password                                                                          |
|   GET  | /auth/me               | Used to gain userInfo from token && check if token is still valid.                                                                     | token                                                                                     |
|   GET  | /locations             | Fetch all backpacker posts that belong to all the countries the app currently supports.                                                | None                                                                                      |
|   GET  | /locations/:id/posts   | Fetch all backpacker posts that belong to the chosen country by countryId                                                              | countryId                                                                                 |
|   GET  | /locationpost/:postId  | Fetch all information that belongs to a single post by postId                                                                          | postId                                                                                    |
|  POST  | /newpost               | Add a new post to the app & utilizes nodemailer to send the poster a template confirmation E-mail with an option to edit & delete post | Title, description, imageUrl, userId, countryId, adress, latitude, longitude, name, email |
|  PATCH | /locationposts/:postId | Increments the likes a post has by postId                                                                                              | postId                                                                                    |
| DELETE | /locationposts/:postId | Deletes a post by postId                                                                                                               | postId                                                                                    |

## How to install this?
- Clone the [server](https://github.com/SmitnAntonyDv/Portfolio-project-Hidden_Gems-BackEnd).
- Cd into project directory.
- install dependencies using `npm install` inside the directory.
- start the server using `npx nodemon index.js` OR `npm node index.js`
- Server runs on port 4000 by default.

### NOTE:

This project has several hidden keys inside a .ENV file.
To successfully use this server please include/chance these with your own.
the hidden keys:
JWT_TOKEN
DEVOLOPMENT_URL

These keys are inside the config file, the development url can be obtained through ElephantSQL.

:point_right: Please refer to the [front-end ReadMe](https://github.com/SmitnAntonyDv/SmitnAntonyDv-Portfolio_Project_Hidden-Gems_FrontEnd) for a more details about this project. :point_left:
