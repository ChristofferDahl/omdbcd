Rails.application.routes.draw do
  resources :favorites

  get '/search', to: "omdb#search_omdb"
  get '/getMedia', to: "omdb#search_omdb_by_id"

  # Defines the root path route ("/")
  root "favorites#index"
end
