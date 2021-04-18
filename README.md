## Assignment 19: Budget Tracker
---
### Topic
Progressive Web Application (PWA) - Service Worker, IndexedDB, Web Manifest

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

* The project was developed from a starter codebase provided at the assignment description page.
* Basic considerations were as follows:
    * The application includes a service worker, a web manifest and indexedDB functionality
    * If the user adds a transaction while offline, the transaction is saved to indexedDB database, but the display (table, chart and total) does not get updated until the app is back online 
    * Application was deployed to Heroku 

### Demo Run
![Demo Run](./public/images/assignment19_demo.gif)

### Link of Deployed Application
[Heroku App Link](https://assignment19-budget-tracker.herokuapp.com/)
