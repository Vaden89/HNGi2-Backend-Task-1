# Number Classification API For Basic Fact About A Number

This is a public api for retrieving basic facts about a number, was created in fulfillment of my HNGi12 Stage zero task

## Set-up Instructions

If you would like to run this project locally you would need to carry out the following steps:

1. Open your terminal and run `git clone https://github.com/Vaden89/HNGi2-Backend-Task-1.git`
2. Cd into the clone repository
3. Run `npm install` to install all dependencies
4. Create and ENV file and specify "PORT"
5. Run `npm start` to start up the server

### Requirements

1. node v20 or greater

## Endpoint URL

The only route in this API is "{base_url}/api/classify-number?number=12" which accepts a get request and returns information...
The query number must be included and has to be a valid number

### Example Request and Response

Request: GET http://localhost:3000/api/classify-number?number=371

Response:{
"number": 371,
"is_prime": false,
"is_perfect": false,
"properties": [
"armstrong",
"odd"
],
"digit_sum": 11,
"fun_fact": "371 is an uninteresting number."
}
