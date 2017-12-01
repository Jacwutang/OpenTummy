export const createFavorite = favorite=> {

  return($.ajax({
    url: '/api/favorites',
    method: 'POST',
    data: {favorite}
    })
  )
};


export const deleteFavorite = (id) => (
  $.ajax({
    url: `/api/favorites/${id}`,
    method: 'DELETE',
    data: id
  })

);
