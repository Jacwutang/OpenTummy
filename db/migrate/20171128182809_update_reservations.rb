class UpdateReservations < ActiveRecord::Migration[5.1]
  def change
    add_column :reservations, :thumbnail, :string
  end
end
