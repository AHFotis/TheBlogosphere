# TheBlogosphere

A personal blogging application for coding or any interest.

![GitHub License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

A blogging website allowing users to write, update, and delete personal blogs. Blogger can also view and comment on the blogs of others.

## Table of Contents

* [Reference](#reference)
* [Details](#details)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)
  
## Reference

Click [here](https://the-blogosphere.herokuapp.com/) to view the live application on Heroku.

Screenshot of homepage
  ![Postman Shot](Assets/sample.png)


## Details
  * Homepage will show all current saved blogs.
  * When clicking on dashboard or log in, you will be prompted to login or sign up for a blog account.
  * After you are logged in, dates appear on the blogs on the homepage.
  * Clicking on an individual blog will allow you to view it, comment on it, and view all other comments.
  * Clicking on dashboard will show you all of your current blogs. There is also a button at the bottom that allows you to create a new blog.
  * When you click on one of your blogs, you will be able to update or delete it.
  * When you are finished, click logout to log out. You will be automatically logged out after an hour.

## Technologies
Technologies used: CSS, JavaScript, MySQL, Inquirer, Sequelize, Express, dotenv, Handlebars, Session-Sequelize.

## Installation

To install all necessary materials for this project, run the following command:

```
npm install
```

## Usage

Before using, locally create your database by opening MySQL in your shell, and running the following command:
```
source /(insertpath)/schema.sql
```

Then exit the MySQL shell and run the following command to seed the database

```
npm run seed
```

Be sure to install all node modules and packages locally before using the application, and to create a .env with your information.

## License

This application is protected under the MIT license.

For more information, visit this link: [MIT Info](https://opensource.org/licenses/MIT)

## Contributing
Design may be changed to the contributors needs and taste.

## Questions

If you have any questions, please reach out.
* GitHub: [AHFotis](https://github.com/AHFotis)
* Email: annahickey2@gmail.com