
export const fetchAllReviews = (restaurant_id) => {

  return ($.ajax({
    url: '/api/reviews',
    method: 'GET',
    data: {restaurant_id}
    })
  );
};


export const createReview = review => {

  return($.ajax({
    url: '/api/reviews',
    method: 'POST',
    data: {review}
    })
  )
};
