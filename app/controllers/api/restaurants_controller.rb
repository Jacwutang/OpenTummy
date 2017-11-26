class Api::RestaurantsController < ApplicationController
  def index
    # @restaurants = Resturant.all
    # render "api/restaurants/index"
  end

  def show

  end

  def create

    @rest = Restaurant.new(rest_params)
    if @rest.save
      # print ("hello world")
      # print(@rest.id)
      # print( @rest)
      render "api/restaurants/show"


    else
      
      render json: @rest.errors.full_messages, status: 422
    end

  end

  private
  def rest_params
    params.require(:restaurant).permit(:name,:address,:city,:state,:postal_code,:country,:price,:category,:price,:thumbnail,:image_urls,:owner_id,:max_reservations,:lng,:lat, :description)
  end

end
