import * as RESTAURANTutil from '../utils/restaurant_api_util';

export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const RECEIVE_RESTAURANT_ERRORS = "RECEIVE_RESTAURANT_ERRORS";

// export const RECEIVE_RESTAURANT_ERRORS = "RECEIVE_RESTAURANT_ERRORS";

export const receiveErrors = errors => ({
  type: RECEIVE_RESTAURANT_ERRORS,
  errors

});

export const receiveRestaurant = (restaurant) => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

// export const receiveRestaurantErrors = (errors) => ({
//   type: RECEIVE_RESTAURANT_ERRORS,
//   errors
// });


export const createRestaurant = restaurant => dispatch => (
  RESTAURANTutil.createRestaurant(restaurant).then(restaurant => (
    dispatch(receiveRestaurant(restaurant))
  ), err => (dispatch(receiveErrors(err.responseJSON)))
  ));

//, err => (
    //   dispatch(receiveRestaurantErrors(err.responseJSON))
    // ))

    // export const createRestaurant = restaurant => dispatch => {
    //   debugger;
    //     return(RESTAURANTutil.createRestaurant(restaurant).then(restaurant => (
    //     dispatch(receiveRestaurant(restaurant)))))
    //   };
