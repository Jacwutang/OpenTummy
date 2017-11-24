class CreateRestaurant < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name, null:false
      t.string :address, null:false
      t.string :city, null:false
      t.string :state, null:false
      t.string :postal_code, null:false
      t.string :country, null:false
      t.integer :price, null:false
      t.string :category, null:false
      t.string :image_urls, array:true, default: []
      t.integer :owner_id
      t.integer :max_reservations
  end

    add_index :restaurants, :name
    add_index :restaurants, :address


  end

end
