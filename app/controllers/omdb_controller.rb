class OmdbController < ApplicationController
    include Searches

    def search_omdb
        response = searcher(params[:title])
        render json: response
    end

end
