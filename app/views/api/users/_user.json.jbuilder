json.extract! user, :id, :username

#extract list of restaurants
json.restaurants do
    user.restaurants.each do |rest|
      json.set! rest.id do
        json.extract! rest, :id, :name, :address,:city,:state,:postal_code, :country ,:price, :thumbnail, :lng, :lat, :owner_id, :category
      end
    end
end
