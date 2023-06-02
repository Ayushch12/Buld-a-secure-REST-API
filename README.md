
# Building of a secure API for a food review app

This application provides various features for users to review products, upload images, express their preferences through liking or disliking products or images, and more. It serves as an e-commerce platform, offering a range of functionalities to enhance the user experience.




## Deployment

To deploy the Frontend

```bash
  cd Frontend
  npm install
  npm start
```





To deploy the Backend

```bash
  cd Backend
  npm install
  npm start
```

Before accessing the app : 

```bash
   you'll need to create a .env file in the root directory (back folder).
   Inside this new file, add environment-specific variables on new lines in the form of NAME=VALUE, as below :


```




To deploy the Backend

```bash
  cd Backend
  npm install
  npm start
```

Before accessing the app : 

```bash
   you'll need to create a .env file in the root directory (back folder).
   Inside this new file, add environment-specific variables on new lines in the form of NAME=VALUE, as below :


```




Then open on any web browser : http://localhost:4200/

And we have run backend : http://localhost:3000/



# What did I learn ?

Building a REST API allowed me to apply my JavaScript knowledge to the backend development of an application, using Node.js, Express and MongoDB.

I also learnt how to identify and apply basic security rules to the developpement of an application, in order to comply with the OWASP and RGPD standards.
In order to meet these requirements in terms of security, I used (among others) below packages :

- bcrypt, in order to hash and salt a password
- jsonwebtoken, in order to ensure secure - authentification on all requests
- mongoose-unique-validator, in order to ensure an email address' uniqueness and to return errors
- dotenv, in order to store and secure database credentials
- crypto-js, in order to protect users' email addresses, to comply with the RGPD rules
- express-mongo-sanitize, in order to counter injection attacks, by validating the entries.