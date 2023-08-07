# frozen_string_literal: true

Rails.application.routes.draw do
  resources :greetings
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'greetings#index'
  match '/greeting', to: 'greetings#index', via: :get
  match '/random', to: 'greetings#random', via: :get
end
