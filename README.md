## Assignment 18: Budget Tracker
---
### Topic
Progressive WEb Application (PWA)

### User Story (Obtained from the assignment description)

```
AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling
```

### Acceptance Criteria (Obtained from the assignment description)

```
GIVEN a budget tracker without an internet connection
WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated 
```

## My Actions and Notes

* The project was developed from scratch.
* Basic considerations were as follows:
    * Following packages were used: ```express-handlebars```, ```mysql2```, ```sequelize```, ```dotenv```, ```bcrypt```, ```express-session``` and  ```connect-session-sequelize```
    * Application's folder structure follows MVC paradigm
    * Application was deployed to Heroku
    * For each model, I attempted to create all CRUD apis, some of which return json as response, and some were used in homepage and dashboard page routes to render appropriate views
    * If the authenticated user is idle for 10 mins, then he/she is automatically signed out and returned to homepage
    * I also set the session cookie to be expired in 5 hours
    * I added features so that if the user is logged in, then he/she can delete his/her own comments from any post 

### Demo Run
![Demo Run](./assets/images/assignment19_demo.gif)

### Link of Deployed Application
[Heroku App Link](https://assignment19-tech-blog.herokuapp.com/)
