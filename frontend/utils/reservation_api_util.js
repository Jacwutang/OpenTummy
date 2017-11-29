export const createReservation = reservation => {

  return($.ajax({
    url: '/api/reservations',
    method: 'POST',
    data: {reservation}
    })
  )
};


export const editReservation = reservation => {

  return($.ajax({
    url: `/api/reservations${reservation.id}`,
    method: 'PATCH',
    data: {reservation}
    })
  )
};


export const deleteReservation = (id) => (
  $.ajax({
    url: `/api/reservations/${id}`,
    method: 'DELETE',
    data: id
  })

);
