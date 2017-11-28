class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.integer :restaurant_id, null:false
      t.integer :user_id, null:false
      t.integer :head_count, null:false
      t.datetime :date, null:false
      t.datetime :timeslot, null:false


    end

    add_index :reservations, :restaurant_id
    add_index :reservations, :user_id
  end
end
