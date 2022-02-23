Rails.application.routes.draw do
  resources :favorites
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "favorites#index"
end
