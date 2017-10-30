class Friendship < ApplicationRecord

  validates :user_id, :friend_user_id, presence: true
end
