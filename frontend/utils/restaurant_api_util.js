
export const fetchRestaurant = (id) => {

  return ($.ajax({
    url: '/api/restaurants',
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

export const deleteRestaurant = (id) => (
  $.ajax({
    url: `/api/restaurants/${id}`,
    method: 'DELETE',
    data: id
  })

);
