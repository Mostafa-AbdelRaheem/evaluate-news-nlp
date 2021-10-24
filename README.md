# Udacity Project:Evaluate A News Article with Natural Language Processing

---

This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites by passing the url for this article.

# API

The API used in this project is [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis)

# Config

### Setting up the API

we will be using the MeaningCloud Sentiment Analysis API .

#### Step 1: Signup for an API key

we can find the API [here](https://www.meaningcloud.com/products/sentiment-analysis). Once you create an account with MeaningCloud, you will be given a license key to start using the API.

#### Step 2: Environment Variables

Create a new .env file in the root of your project.
Fill the .env file with your API keys like this:
API_KEY=****\*\*\*\*****\*\*****\*\*\*\*****

# Installation

#### Step 1: Make sure Node and npm are installed from the terminal.

```
node -v
npm -v
```

#### Step 2 : npm install

in order to get all the dependencies we need to install npm

```
npm install
```

#### Step 3: Start the Project in one of 2 modes

##### *production mode

in this mode you need to
1-start the serever:

```
npm run start
```

2-generate the production files:

```
npm run build-pro
```

3- Open browser at http://localhost:8081/

##### *Development mode

1-start the development node:

```
npm run build-dev
```
