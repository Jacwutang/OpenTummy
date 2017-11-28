export const createReservation = reservation => {

  return($.ajax({
    url: '/api/reservations',
    method: 'POST',
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
