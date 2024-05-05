[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Firebase.js]: https://img.shields.io/badge/Firebase-purple
[Firebase-url]: https://firebase.google.com/
[ELE-logo]: docs/media/Everything_Laser_Engraved_icon.png
[ELE-logowhiteorange]: docs/media/Everything_Laser_Engraved-logos_whiteorange.png
[Home-Page]: docs/media/HomePageImage.PNG
[Gallery-Page]: docs/media/GalleryPageImage.PNG
[GallerySelection-Page]: docs/media/GallerySelectionPageImage.PNG
[Contact-Page]: docs/media/ContactPageImage.PNG
[About-Page]: docs/media/AboutPageImage.PNG
[Signin-Page]: docs/media/SigninPageImage.PNG
[Admin-Page]: docs/media/AdminPageImage.PNG
[Jira-Timeline]: docs/media/Jira%20Timeline.PNG
[Relation-Diagram]: docs/media/Relational_Diagram.png

# Laser Engraving Portfolio and Digital Storefront

![Logo][ELE-logo]

## Synopsis:

This project is a portfolio style website, based on the clients laser engraving business. The
website is an e-commerce storefront to show the clients previous work and allows potential
customers to send order requests. The client receives the order requests via email. Using the firebase backend system
the client can review all of his previous, current, and awaiting order requests. The client can edit/update the gallery
photos via the admin dashboard.

## Home Page:

The landing page for the website.
[![Logo][Home-Page]](https://laserengraving-9a35a.web.app/)

## Gallery Page:

Here you may select a category to display more images of that type.
[![Logo][Gallery-Page]](https://laserengraving-9a35a.web.app/gallery)
[![Logo][GallerySelection-Page]](https://laserengraving-9a35a.web.app/gallery)

## Contact Page:

This is the order form that customers may fill out to request a service.
[![Logo][Contact-Page]](https://laserengraving-9a35a.web.app/contact)

## About Page:

A page containing some information about the client and his business.
[![Logo][About-Page]](https://laserengraving-9a35a.web.app/about)

## Signin Page:

The signin page that allows access to the admin page.
[![Logo][Signin-Page]](https://laserengraving-9a35a.web.app/signin)

## Admin Page:

This page allows the client to create new image categories and upload new photo's to a given category.
![Logo][Admin-Page]

## Relational Diagram

![Logo][Relation-Diagram]

## Built With

- [![React][React.js]][React-url]
- [![FireBase][Firebase.js]][Firebase-url]
- [![EmailJS][EmailJS.js]][EmailJS-url]

[React.js]: https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white
[React-url]: https://reactjs.org/
[Firebase.js]: https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white
[Firebase-url]: https://firebase.google.com/
[EmailJS.js]: https://img.shields.io/badge/EmailJS-0DB7ED?style=flat-square&logo=emailjs&logoColor=white
[EmailJS-url]: https://www.emailjs.com/

## Testing

To build & test, the following software is required: Selenium 4.20 Java version, Eclipse IDE, Java SDK 22 Version and Google Chrome.
To run tests,

1. Deploy the website’s React App from the Webstorm or Eclipse IDE using the deployment commands in this manual.
2. During deployment, the IDE will indicate the URL of the launched website. (i.e:https://laserengraving-9a35a.web.app)
3. Run the file ‘laserautotest.java’ from the IDE. This will automatically load the Google Chrome browser and complete a series of validation tests on each page of the website.

## Deployment

1. Open the project with your Integrated Development Environment (IDE) (Webstorm, Visual Studio Code).
2. Open the Terminal: Powershell if Windows or Terminal if MacOS.
3. Install Firebase Tools Globally: First, ensure that you have the Firebase Command Line Interface (CLI) installed globally on your system. You can do this by running the command: npm install -g firebase-tools.
4. Login to Firebase: Next, log in to Firebase using the command: firebase login. This command prompts you to authenticate with your Google account, allowing you to access Firebase services from the command line.
5. Initialize Firebase: After building the React app, initialize Firebase in your project directory using the command: firebase init. This command initiates the Firebase setup process and prompts you to select the Firebase services you want to use.
6. Select the option: "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys".
7. Select Existing Project option.
8. What do you want to use as your public directory? type 'dist' into the command prompt and press 'enter'.
9. Configure as single-page app (rewrite all urls to /index.html)?: Yes.
10. Set up automatic builds and deploys with GitHub? No.
11. File dist/index.html already exists. Overwrite? Yes.
12. Type 'npm run build' into the command prompt and press 'enter'.
13. Type 'firebase deploy' into the command prompt and press 'enter'.

## Jira Timeline

[![Logo][Jira-Timeline]](https://cyberknights8.atlassian.net/jira/software/projects/SCRUM/boards/1/timeline?timeline=MONTHS)

[![Logo][ELE-logowhiteorange]](https://example.com)

## Developers:

Christian Leyva:
cleyvamendez@csus.edu

Paul Marchitiello:
pmarchitiello@csus.edu

Dylan Lacy:
dlacy@csus.edu

Jacob Sullivan:
jacobdsullivan@csus.edu

Anish Rajah:
anishrajah@csus.edu

Zane Williams:
zanewilliams@csus.edu

Jacob Eberhardt:
jacobeberhardt@csus.edu

James Ayers:
jamesmayers2@csus.edu

Illia Pashkovich:
ipashkovich@csus.edu
