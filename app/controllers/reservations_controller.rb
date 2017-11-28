class ReservationsController < ApplicationController
  def create
    @reservation = Reservation.new(reservation_params)

    if @reservation.save!
      render "api/reservations/show"

    else
      render json: ["Please fill all input fields"], status: 401
    end

  end


  def destroy

  end

  def reservation_params
    params.require(:reservation).permit(:restaurant_id, :user_id, :head_count, :date, :timeslot)
  end

end
