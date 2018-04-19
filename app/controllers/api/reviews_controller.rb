class Api::ReviewsController < ApplicationController


  def show
    @review = Review.find(params[:id])
    render "api/reviews/show"
  end

  def create
    @review = Review.new(review_params)

    if !current_user
      render json: ["Please Login before leaving a review"], status: 401
    end

    if !@review.save
      render json: ["Please fill all input fields"], status: 401
    elsif @review.save
      render "api/reviews/show"
    end

  end

  def review_params
    params.require(:review).permit(:user_id, :restaurant_id, :body, :rating,)
  end
end
