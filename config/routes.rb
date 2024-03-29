Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :show]
    resources :user_profile, only: [:create, :destroy, :update, :show]
    resources :friendships, only: [:index]
  end

end
