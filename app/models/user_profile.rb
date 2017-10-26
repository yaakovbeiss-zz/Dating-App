class UserProfile < ApplicationRecord

  belongs_to :user

  has_attached_file :image, default_url: "https://image.freepik.com/free-icon/male-user-profile-picture_318-37825.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


end
