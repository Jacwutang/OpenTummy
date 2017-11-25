import * as RESTAURANTutil from '../utils/restaurant_api_util';

export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
// export const RECEIVE_RESTAURANT_ERRORS = "RECEIVE_RESTAURANT_ERRORS";


export const receiveRestaurant = (restaurant) => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

// export const receiveRestaurantErrors = (errors) => ({
//   type: RECEIVE_RESTAURANT_ERRORS,
//   errors
// });


export const createRestaurant = restaurant => (
  RESTAURANTutil.createRestaurant(restaurant).then(resp => (
    dispatch(receiveRestaurant(resp))
  ))); //, err => (
    //   dispatch(receiveRestaurantErrors(err.responseJSON))
    // ))
