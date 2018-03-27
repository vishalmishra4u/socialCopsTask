# socialcops-task

a [Sails](http://sailsjs.org) application

Solution for the Backend Task Assigned

## Small sails application for the solutions of the scenarios.
This application includes :
### 1. routes(in config) : 
       Contains routes to : 
        (i) upload a csv data into db.
        (ii) stop this upload process (Was not able to execute it completly)
        (iii) update a single field(for 3rd scenario : I am updating a single field only after the uploads are done)

### 2. Policies : 
       Middlewares basically for :
       (i) Run a db backup script which will take backup of db before every API
       (ii) policy to take date input and check date of upload(for 2nd scenario)

### 3. Controller :
     To call model and return the response

### 4. Model :
     To do all the db actions

### 5. There is a csv file insurance-date-2018-03-26.csv on which i am performing all the tasks.
