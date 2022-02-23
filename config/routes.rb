Rails.application.routes.draw do
  resources :favorites

  get '/search', to: "omdb#search_omdb"

  # Defines the root path route ("/")
  root "favorites#index"
end
