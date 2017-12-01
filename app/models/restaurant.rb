class Restaurant < ApplicationRecord
  validates :name,:address,:city,:state,:postal_code,:country,:price, presence: true


  belongs_to :user,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'User',
    optional: true

  has_many :reservations,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: 'Reservation'

  has_many :favorites,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: 'Favorite'

  # def self.top_five_results(query_param)
  #   param = '%' + query_param.downcase + '%' #activerecord
  #   Restaurant.where('lower(title) LIKE ?', param) #where lowercase of title is LIKE param.limit(5)
  #   #Then
  # end

  def self.list_matches(query_param)
    param = '%' + query_param.downcase + '%'
    Restaurant.where('lower(city) LIKE ?', param).limit(10)
  end







end
