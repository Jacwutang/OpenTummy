Rails.application.routes.draw do




  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #defining routes for api communication

  root to: 'static_pages#root'

  #why defaults to json? Render json formatted responses by default

  # api/users
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create,:destroy]
    resources :users, only:[:create,:show,:destroy]
    resources :restaurants, only: [:create,:show,:index, :destroy]
  end



end
