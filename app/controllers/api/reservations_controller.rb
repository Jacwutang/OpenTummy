class Api::ReservationsController < ApplicationController
  def index

  end


  def create
    @reservation = Reservation.new(reservation_params)

    if @reservation.save!
      print("hello world")
      render "api/reservations/show"

    else
      render json: ["Please fill all input fields"], status: 401
    end

  end


  def destroy
    @reservation = Reservation.find(params[:id])
    if @reservation.destroy
      render "api/reservations/show"
    #currentUser -> reservations 1,2,3,4,5,6, restaurants:{} User Jack
    end
  end

  def reservation_params
    params.require(:reservation).permit(:restaurant_id, :user_id, :head_count, :date, :timeslot)
  end

end
