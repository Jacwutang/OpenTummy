# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!(username: 'jack', password: 'password')
User.create!(username: 'demo_user', password: 'password')
Restaurant.create!(
  name: 'McDonalds',
  address: '825 Battery Street',
  city: 'SF',
  state: 'CA',
  postal_code: '94122',
  country: 'USA',
  price: 1,
  category: 'American',
  owner_id: 1
)


Restaurant.create!(
  name: 'Subway',
  address: '725 Battery Street',
  city: 'SF',
  state: 'CA',
  postal_code: '94122',
  country: 'USA',
  price: 1,
  category: 'American',
  owner_id: 1
)

Restaurant.create!(
  name: 'Subway',
  address: '725 Battery Street',
  city: 'SF',
  state: 'CA',
  postal_code: '94122',
  country: 'USA',
  price: 1,
  category: 'American',
  owner_id: 2
)

Restaurant.create!(
  name: 'Omars Taqueria',
  address: 'estacion 4',
  city: 'SF',
  state: 'CA',
  postal_code: '94122',
  country: 'USA',
  price: 1,
  category: 'Mexican',
  owner_id: 2
)
