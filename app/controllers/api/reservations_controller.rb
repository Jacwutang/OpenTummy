class Api::ReservationsController < ApplicationController
  def index

  end


  def create
    @reservation = Reservation.new(reservation_params)

    if !current_user
      render json: ["Please Login before making a reservation"], status: 401

    elsif @reservation.save && current_user
      render "api/reservations/show"
    else
      render json: ["Please fill all input fields"], status: 401
    end

  end

  def edit
    @reservation = Reservation.find(params[:reservation][:id])

    # if @reservation

  end


  def destroy
    @reservation = Reservation.find(params[:id])
    if @reservation.destroy
      render "api/reservations/show"
    #currentUser -> reservations 1,2,3,4,5,6, restaurants:{} User Jack
    end
  end

  def reservation_params
    params.require(:reservation).permit(:restaurant_id, :user_id, :head_count, :date, :timeslot,:thumbnail)
  end

end
