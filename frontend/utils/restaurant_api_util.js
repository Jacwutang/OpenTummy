//check fetchPokemon

export const fetchRestaurants = () => (
  $.ajax({
    url: '/api/restaurants',
    method: 'GET'
  })
)

export const postRestaurant = restaurant => (
  $.ajax({
    url: '/api/restaurants`',
    method: 'POST',
    data: {restaurant}
  })
)
