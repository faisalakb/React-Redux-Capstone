<a name="readme-top"></a>

<div align="center">
  <!-- You are encouraged to replace this logo with your own! Otherwise you can also remove it. -->

  <h3><b>Find a Country?</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 \[Find a Country App\] ](#-Find-a-Country-app)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Author ](#-author-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ (OPTIONAL) ](#-faq-optional-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 [Find a Country App] <a name="about-project"></a>



I have created a single-page application (SPA) called "Find a Country App " that allows users to view the country and detailed information of countries around the world. The application is built with React and Redux, following the specified requirements.

The Home page of the application displays a list of categories, which can be filtered based on parameters such as the Region name. Region names getting from the AccuWeather API. When a user clicks on a Region, they are navigated to the all countries belong to that region.

On the Details page, the application retrieves data from the restcountries API to display detailed information about the selected country. Users can navigate back to the Home page by clicking the "Back" button.

To ensure the quality of the application, I have created unit tests for the pure functions in the Redux code. API access has been mocked in the tests to prevent actual requests, and the connection to the Redux Store has also been mocked for isolated testing.

The data retrieved from the API is stored in the Redux store, allowing for efficient management and access. A Filter stateless component is used to filter the data obtained from the API based on the specified parameters.

Each page within the application, including the main page and individual item pages, has a unique route to enable proper navigation within the SPA.

Finally, the project has been deployed and is accessible online, allowing users to access and interact with the Find a country application.

Overall, this project satisfies the stated requirements, and the deployed application provides a user-friendly interface to explore and view  different countries.


 Mobile Version: 
![image](https://github.com/faisalakb/React-Redux-Capstone/blob/react-capstone/asset/mobileVerion.png)



[Live Demo Link](https://reactreduxcap.onrender.com/)

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>


<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li>Redux</li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- View all countries
- Search by country
- Select Region
- Detail by country

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

> Please click the link below to check the demo

- [Live Demo Link](https://reactreduxcap.onrender.com/)
- [Presentation Video Link](https://drive.google.com/file/d/1Dn3JlFKc13bD8KS0mVI5qha9xZCp51Xq/view?usp=sharing)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>


To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- Web browser
- Code editor
- Good internet connection

### Setup

Clone this repository to your desired folder:



```sh
  cd my-folder
  git clone https://github.com/faisalakb/React-Redux-Capstone
```


### Install

Install this project with:


```sh
  cd react-redux-capstone
  npm install
```

### Usage

To run the project, execute the following command:

```sh
  npm start
```


### Run tests

To run tests, run the following command:


```sh
  npm test
  Press a to run all test
```


### Deployment

Check here for live online version: https://reactreduxcap.onrender.com/
<!--
Example:

```sh

```
 -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Author <a name="authors"></a>

👤 **Faisal Mumtaz**

- GitHub: [@faisalakb](https://github.com/faisalakb)
- Twitter: [@faisalakb786](https://twitter.com/Faisalakb786)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/faisal-mumtaz-514a221a6/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>


- [ ] **[Add Desktop version]**
- [ ] **[Add Cities detail]**
- [ ] **[Add famous places to visit]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/faisalakb/React-Redux-Capstone/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>



If you like this project...Give ⭐️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank all who inspired us during the project:

Original design idea by Nelson Sakwa on [Behance](https://www.behance.net/sakwadesignstudio).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](https://github.com/faisalakb/React-Redux-Capstone/blob/Dev/LICENSE) licensed.


<p align="right">(<a href="#readme-top">back to top</a>)</p>
