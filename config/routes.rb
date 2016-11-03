Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  resources :posts, except: [:new, :edit]

  root 'statics#main'
end
