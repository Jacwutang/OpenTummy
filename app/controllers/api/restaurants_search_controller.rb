class Api::RestaurantsSearchController < ApplicationController
  def index
    @restaurants = Restaurant.list_matches(search_params[:query])
  end


  def search_params
    params.require(:search).permit(:query)
  end


end
