class OmdbController < ApplicationController
    include Searches

    def search_omdb
        response = searcher(params[:query],params[:type],params[:year])
        render json: response
    end

    def search_omdb_by_id
        response = search_by_id(params[:omdbId])
        render json: response
    end

end
