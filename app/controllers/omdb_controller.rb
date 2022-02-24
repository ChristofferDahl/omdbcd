class OmdbController < ApplicationController
    include Searches

    def search_omdb
        response = searcher(params[:query],params[:type],params[:year])
        render json: response
    end

end
