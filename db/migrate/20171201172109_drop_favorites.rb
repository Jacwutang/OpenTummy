class DropFavorites < ActiveRecord::Migration[5.1]
  def change
    drop_table :favorites
  end
end
