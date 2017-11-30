
export const fetchRestaurant = (id) => {

  return ($.ajax({
    url: `/api/restaurants/${id}`,
    method: 'GET',
    data: id
  })
  );
};


export const fetchAllRestaurants = () => {

  return ($.ajax({
    url: '/api/restaurants',
    method: 'GET'
    })
  );
};

// export const createRestaurant = restaurant => (
//   $.ajax({
//     url: '/api/restaurants',
//     method: 'POST',
//     data: {restaurant}
//   })
// );
export const createRestaurant = restaurant => {

  return($.ajax({
    url: '/api/restaurants',
    method: 'POST',
    data: {restaurant}
    })
  )
};

export const editRestaurant = restaurant => {

  return($.ajax({
    url: `/api/restaurants/${restaurant.id}`,
    method: 'PATCH',
    data: {restaurant}
    })
  )
};


export const deleteRestaurant = (id) => (
  $.ajax({
    url: `/api/restaurants/${id}`,
    method: 'DELETE',
    data: id
  })

);

export const searchRestaurants = (query) => (
  $.ajax({
    url: '/api/searches',
    method: 'GET',
    data: {search: {query} }
  })
);
