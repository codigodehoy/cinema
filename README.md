# Cinema App - Module 1 Test

This is the application to test the knowledge gained in the first module of the ioet university 2.0.

The application stucture is the following:

```
- css
- javascript
- pages
- resources
  - icons
  - images
- test
```

### Install dependencies

In order to install the dependencies, make sure to be in the cinema repository. And, run 
```
npm install
```

### Run the application

Yo get the application started, run:

```
npm start
```

***Important***
Go to [http://127.0.0.1:8080/pages/](http://127.0.0.1:8080/pages/) in order to see the landing page

### Run tests

```
npm test
```
Keep in mind that there are various types of tests. In unit tests it's essential to avoid making external API calls, as they are designed to evaluate individual units of code in isolation.

### Create Rapid API Key

You will need your own API Key to complete this exercise, the project uses Rapid API for retrieving movie data.
Please follow the steps below to create it:


1. Create a new account on [RapidAPI](https://rapidapi.com/hub)
2. Fill in your information and choose the free plan.
3. Go to the [Dashboard or Apps tab](https://rapidapi.com/developer/dashboard).
4. RapidAPI provides a default application, if you do not want to create a new one you can proceed to step 6.
5. Click 'Add New App', provide a name and description for your app and then click 'Add app'.
6. Find your API key in the 'Authorization' section of your app.
7. Copy the value in the `X-RapidAPI-Key` header under OPTIONS in `javascript/constants.js`.
8. Now, go to [MoviesDatabase](https://rapidapi.com/SAdrian/api/moviesdatabase/) and press the button `Subscribe to Test`.
9. Select the 'Basic' plan.

With this, you should be able to test the API!

## Requirements

### 1. Fix height of billboard images

You will see that in the billboard section, every film poster has their own height. Make every film poster the same height.

### 2. Make the Little Mermaid banner responsive

Currently, the Little Mermaid banner in the home page is not responsive. Make the image adjust its size depending on screen size.

### 3. Render Cinemark's Logo

The Cinemark logo seems to be broken. Please, make sure it renders.

### 4. Add a unit testing for the `get_movies` function

The function `get_movies` has no tests. Add the corresponding unit tests. Create a file called `get-movies.test.js` under the folder `test/`. There, add the testing cases you consider necessary for this function.

### 5. Create a service to get a movie by id

In the `javascript/` folder, create a new file called `get-movie.js`. In this file, add a new service to get movies by id. The id will be passed as argument. This service should also have its testing cases within `test/get-movie.test.js` just as in requirement 4. The endpoint we would call is `https://moviesdatabase.p.rapidapi.com/titles/{id}?info=base_info` where `movie-id` can be any string.

In the `javascript/constants.js` file, you'll find a constant named API_MOVIE_ID_URL. You can use it if you find it helpful.

### 6. Create the `One Hundred and One Dalmatians` page

We need to show the film 'One Hundred and One Dalmatians' in a new page. This page should look like this:

![Movie Page Mockup](./movie-page-mockup.png?raw=true "Mockup")

So, create a new file in the `pages/` folder called `one-hundred-and-one-damatians.html`. Here, add the following piece of code:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/global.css"/>
    <title>Document</title>
    <script src="../javascript/get-movie.js"></script>
    <script src="../javascript/constants.js"></script>
</head>
<body>
    <header>
        <nav class="about-us">
            <div class="social-media">
                <img src="../resources/icons/facebook.png">
                <img src="../resources/icons/twitter.png">
                <img src="../resources/icons/instagram.png">
            </div>
            <div></div>
            <div class="login">
                <button class="sign-up">Sign Up</button>
                <button class="log-in">Log in</button>
            </div>
        </nav>
        <nav class="shop-options">
            <img class="logo" src="../images/cinemark_logo.png" />
            <nav class="options">
                <h3>Billboard</h3>
                <h3>Theaters</h3>
                <h3>Snackbar</h3>
                <h3>Promotions</h3>
            </nav>
        </nav>
    </header>

    <div class="banner">
        <button class="more-information">More Information</button>
    </div>

    <div class="filter">
        <div class="city-filter">
            <h3>You are in:</h2>
            <select required aria-placeholder="Value2">
                <option value="None" hidden>None</option>
                <option value="value2">Value 2</option>
                <option value="value3">Value 3</option>
            </select>
        </div>
        <div class="local-filter">
            <h3>Theaters:</h2>
            <select required aria-placeholder="Value2">
                <option value="None" hidden>None</option>
                <option value="value2">Value 2</option>
                <option value="value3">Value 3</option>
            </select>
        </div>
    </div>

    <h1>One Hundred and One Dalmatians</h1>
    <div class="movie-details">
        // Your html code
    </div>
</body>
<script>
    // Your api to get information here. Remember that the id of the movie is 'tt0055254'
</script>
<footer>
    <div class="about-us">
        <h2>About</h2>
        <h3>Who are we?</h3>
        <h3>Terms and Conditions</h3>
    </div>
    <div class="contact-us">
        <h2>Contact us</h2>
        <h3>FAQs</h3>
    </div>
    <div class="maketing-empresarial">
        <h2>Marketing</h2>
        <h3>Services</h3>
    </div>
    <div class="downloads">
        <h2>Download our App</h2>
    </div>
    <div class="apps">
        <img src="../resources/icons/facebook-red.png" alt="">
        <img src="../resources/icons/twitter-red.png" alt="">
        <img src="../resources/icons/instagram-red.png" alt="">
    </div>
</footer>
</html>
```

Use the service created in the `5` to fetch the movie information. The id of this movie is 'tt0055254'. In order to apply the styles, you can use the `css/global.css` file.
> Hint:
> You can use flex box or grid in order to acomplish this view
