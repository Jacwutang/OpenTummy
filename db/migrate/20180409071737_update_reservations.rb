class UpdateReservations < ActiveRecord::Migration[5.1]
  def change
    change_table :reservations do |t|
      t.change :timeslot, :string, null:false
      t.change :date, :string, null:false

    end

  end
end
