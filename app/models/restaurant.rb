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





end
