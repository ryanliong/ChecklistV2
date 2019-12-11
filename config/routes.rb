Rails.application.routes.draw do
  root 'static#index'
  namespace :items, defaults: {format:'json' } do
    get 'items', to: 'items#index'
  end

  resources :items 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
