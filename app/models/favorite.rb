class Favorite < ApplicationRecord
  validates :user_id, :restaurant_id, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'User',
  optional: true

  belongs_to :restaurant,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: 'Restaurant',
  optional: true

end
