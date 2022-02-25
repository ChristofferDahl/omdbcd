# README

## Prerequisites:

Create a .env file in root directory with:
  * API_KEY - which should be your OMDB api key
  * REACT_APP_DEPLOY_URL - which should be the url where the app runs, if ran locally probably: http://localhost:3000

Run the following commands set up your environment:
  * bundle install

  * bundle exec rails webpacker:install

  * bundle exec rails webpacker:install:react

  * rails webpacker:compile

  * rails db:migrate

## Tests:

The tests can be executed with the following command in the root directory:
  * yarn test

