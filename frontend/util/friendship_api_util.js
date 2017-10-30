export const fetchFriendships = () => (
  $.ajax({
    method: 'GET',
    url: 'api/friendships'
  })
)
