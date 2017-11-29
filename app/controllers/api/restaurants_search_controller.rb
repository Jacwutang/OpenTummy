class Api::RestaurantsSearchController < ApplicationController
  def index
    @restaurants = Restaurant.list_matches(search_params[:query])

    #render "api/search/index"
  end


  def search_params
    params.require(:search).permit(:query)
  end


end
