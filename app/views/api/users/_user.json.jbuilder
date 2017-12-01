json.extract! user, :id, :username

#extract list of restaurants
if user.restaurants.count > 0
  json.restaurants do
    user.restaurants.each do |rest|
      json.set! rest.id do
        json.extract! rest, :id, :name, :address,:city,:state,:postal_code, :country ,:price, :thumbnail, :lng, :lat, :owner_id, :category
      end
    end
  end

  else
    json.restaurants Object

end

if user.reservations.count > 0
  json.reservations do
    user.reservations.each do |res|
      json.set! res.id do
        json.extract! res, :id, :restaurant_id, :user_id, :head_count, :date, :timeslot
      end
    end
  end
else
  json.reservations Object
end


if user.favorite_restaurants.count > 0
  json.favorite_restaurants do
    user.favorite_restaurants.each do |fav|
      json.set! fav.id do
        json.extract! fav, :id,:user_id, :restaurant_id
      end
    end
  end
else
  json.favorite_restaurants Object
end
