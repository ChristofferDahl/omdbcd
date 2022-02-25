require 'dotenv'
Dotenv.load

module Searches
  require 'rest-client'

  def searcher(query, type, year)
      url = "http://www.omdbapi.com/?apikey="+ENV["API_KEY"]
      if type == 'all'
          url += "&s=#{query}"
      else
          url += "&s=#{query}&type=#{type}"
      end
      if year != ''
          url += "&y=#{year}"
      end
      response = RestClient.get(url)
  end
  def search_by_id(omdbId)
      url = "http://www.omdbapi.com/?i=#{omdbId}&apikey="+ENV["API_KEY"]
      response = RestClient.get(url)
  end
end