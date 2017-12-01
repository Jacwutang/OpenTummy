class Api::FavoritesController < ApplicationController
  def index
    @favorites = Favorites.all
    render "api/favorites/index"
  end


  def create
    @favorite = Favorite.new(fav_params)

    if !current_user
      render json: ["Please Login before adding Favorite"], status: 401

    elsif @favorite.save && current_user
      render "api/favorites/show"
      end
    end

  


  def destroy
    @favorite = Favorite.find(params[:id])

    if @favorite.destroy
    else


    end
  end

  def fav_params
    params.require(:favorite).permit(:user_id,:restaurant_id)
  end
end
