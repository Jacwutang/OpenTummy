import * as RESTAURANTutil from '../utils/restaurant_api_util';

export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const RECEIVE_RESTAURANT_ERRORS = "RECEIVE_RESTAURANT_ERRORS";
export const RECEIVE_ALL_RESTAURANTS = "RECEIVE_ALL_RESTAURANTS";
export const REMOVE_RESTAURANT = "REMOVE_RESTAURANT";

// export const RECEIVE_RESTAURANT_ERRORS = "RECEIVE_RESTAURANT_ERRORS";

export const removeRestaurant = id => ({
  type: REMOVE_RESTAURANT,
  id
})

export const receiveErrors = errors => ({
  type: RECEIVE_RESTAURANT_ERRORS,
  errors

});

export const receiveRestaurant = (restaurant) => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

export const receiveAllRestaurants = (restaurants) => ({
  type: RECEIVE_ALL_RESTAURANTS,
  restaurants
});


export const createRestaurant = restaurant => dispatch => (
  RESTAURANTutil.createRestaurant(restaurant).then(restaurant => (
    dispatch(receiveRestaurant(restaurant))
  ), err => (dispatch(receiveErrors(err.responseJSON)))
  ));

export const requestAllRestaurants = () => dispatch => (
  RESTAURANTutil.fetchAllRestaurants().then( restaurants => (
    dispatch(receiveAllRestaurants(restaurants))
  ))

);

export const deleteRestaurant = (id) => dispatch => (
  RESTAURANTutil.deleteRestaurant(id).then (resp => (
    dispatch(removeRestaurant(id))
  ))
);
