export const createUserProfile = profile => (
  $.ajax({
    method: 'POST',
    url: 'api/user_profile/',
    data: profile,
    contentType: false,
    processData: false,
  })
)

export const fetchUserProfile = id => (
  $.ajax({
    method: 'GET',
    url: `api/user_profile/${id}`
  })
)
