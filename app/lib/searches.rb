require 'dotenv'
Dotenv.load

module Searches
    require 'rest-client'

    def searcher(search)
        url = "http://www.omdbapi.com/?s=#{search}&apikey="+ENV["API_KEY"]
        response = RestClient.get(url)
    end

    def search_by_id(id)
        puts id
        url = "http://www.omdbapi.com/?i=#{id}&apikey="+ENV["API_KEY"]
        response = RestClient.get(url)
    end
end