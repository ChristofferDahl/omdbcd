require 'dotenv'
Dotenv.load

class OmdbController < ApplicationController
    require 'rest-client'

    def search_omdb
        url = "http://www.omdbapi.com/?s=#{params[:title]}&apikey="+ENV["API_KEY"]
        response = RestClient.get(url)
        render json: response
    end
end
