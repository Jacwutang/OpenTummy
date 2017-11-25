class RemoveRestaurant < ActiveRecord::Migration[5.1]
  def change
    drop_table :restaurants
  end
end
