 json.extract! rest, :id, :name, :address,:city,:state,:postal_code, :country ,:price, :thumbnail, :lng, :lat, :owner_id, :category

if rest.reviews.count > 0
  json.reviews do
    rest.reviews.each do |review|
      json.set! review.id do
        json.extract! review, :id, :rating, :user_id, :restaurant_id, :body
      end
    end
  end
else
  json.reviews Object
end
