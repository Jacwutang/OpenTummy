import * as FAVORITEutil from '../utils/Favorite_api_util';

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const RECEIVE_FAVORITE_ERRORS = "RECEIVE_FAVORITE_ERRORS";


export const removeFavorite = id => ({
  type: REMOVE_FAVORITE,
  id
})

export const receiveFavoriteErrors = errors => ({
  type: RECEIVE_FAVORITE_ERRORS,
  errors
});

export const receiveFavorite = (reservation) => ({
  type: RECEIVE_FAVORITE,
  reservation
});


export const createFavorite = Favorite => dispatch => (
  FAVORITEutil.createFavorite(Favorite).then(Favorite => (
    dispatch(receiveFavorite(Favorite))), err => (dispatch(receiveFavoriteErrors(err.responseJSON)))
));


export const deleteFavorite = (id) => dispatch => (
    FAVORITEutil.deleteFavorite(id).then (resp => (
      dispatch(removeFavorite(resp))
    )));
