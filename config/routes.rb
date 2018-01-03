Rails.application.routes.draw do






  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #defining routes for api communication

  root to: 'static_pages#root'

  #why defaults to json? Render json formatted responses by default

  # api/users
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create,:destroy]
    resources :users, only:[:create,:show,:destroy]
    resources :restaurants, only: [:create,:show,:index, :destroy, :edit,:update]
    resources :reservations, only: [:create,:destroy,:edit,:update]
    resources :searches, only:[ :index]
    resources :favorites, only:[:index,:create,:destroy]
    resources :reviews, only:[:index,:create,:show]
    # resources :music_searches, only: [:index] do
    #   get "songs by artist", on: :collection
    #
    # end

  end




end
