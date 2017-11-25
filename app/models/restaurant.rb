class Restaurant < ApplicationRecord
  validates :name,:address,:city,:state,:postal_code,:country,:price, presence: true


  belongs_to :user,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'User',
    optional: true





end
