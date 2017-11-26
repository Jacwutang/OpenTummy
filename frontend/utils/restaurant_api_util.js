
// export const fetchAllRestaurants = () => (
//   $.ajax({
//     url: '/api/restaurants',
//     method: 'GET'
//   })
// );


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
