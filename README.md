# Drewno I kolor Website

## Overview

### What is this site for?
 
This website's primary function is to showcase the various products and services provided by "Drewno I Kolor" - a crafts company based in Poland - and to allow potential customers to make contact with queries and orders.
 
### What does it do?
 
This app will allow potential customers to learn about the company and also browse the various products and bespoke services on offer. The site will consist of a index/shell which will receive templates via the angular router. These templates/views include the following: a home page with a picture slider linking to various products/services pages, one page for each of the 3 product categories and a page for each individual product displaying picture, description and price. There will also be a page detailing the bespoke service provided as well as a contact us page with form and contact details and an about us page.
### How does it work
 
This site is a single page application powered by Angular JS and styled with Bootstrap.

 
## Features

### Existing Features
- Header 
- Navigation 
- Footer
- Home Page
- Products pages
- Services page
- Contact page
- About us page

## Tech Used

### Some of the tech used includes
- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, we also use it to build custom directives and services
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [Angular-bootstrap](https://angular-ui.github.io/bootstrap/)
    - On top of AngularJS and regular Twitter Bootstrap we also used **UI Bootstrap** which provides certain Bootstrap components written in pure AngularJS. This was necessary for the seemless functioning of the image slider on the home page.
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks


 
## Contributing

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request