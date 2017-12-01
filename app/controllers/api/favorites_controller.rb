class Api::FavoritesController < ApplicationController
  def index
    @favorites = Favorites.all
    render "api/favorites/index"
  end


  def create
    @favorite = Favorite.new(fav_params)

    if @favorite.save
      render "api/favorites/show"
    else

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
