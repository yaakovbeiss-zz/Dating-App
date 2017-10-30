# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!({first_name: 'Yaakov', last_name: 'Beiss', password: 'password',
  email: 'yaakovbeiss@gmail.com', gender: 'male', birthday: DateTime.new(1990, 9, 22) })

user2 = User.create!({first_name: 'Dovid', last_name: 'Beiss', password: 'password',
  email: 'dovidbeiss@gmail.com', gender: 'male', birthday: DateTime.new(1985, 11, 14) })

user3 = User.create!({first_name: 'Eli', last_name: 'Beiss', password: 'password',
  email: 'elibeiss@gmail.com', gender: 'male', birthday: DateTime.new(1988, 10, 17) })

user4 = User.create!({first_name: 'Yummy', last_name: 'Beiss', password: 'password',
  email: 'yummybeiss@gmail.com', gender: 'male', birthday: DateTime.new(1993, 12, 24) })

user5 = User.create!({first_name: 'Ma', last_name: 'Beiss', password: 'password',
  email: 'sturmstats@aol.com', gender: 'female', birthday: DateTime.new(1956, 10, 8) })

user6 = User.create!({first_name: 'Abba', last_name: 'Beiss', password: 'password',
  email: 'rabeiss@aol.com', gender: 'male', birthday: DateTime.new(1954, 9, 17) })

friend1 = Friendship.create!({user_id: user1.id, friend_user_id: user2.id })
friend2 = Friendship.create!({user_id: user1.id, friend_user_id: user3.id })
friend3 = Friendship.create!({user_id: user1.id, friend_user_id: user4.id })
friend4 = Friendship.create!({user_id: user1.id, friend_user_id: user5.id })
friend5 = Friendship.create!({user_id: user1.id, friend_user_id: user6.id })

user_profile1 = UserProfile.create!({ user_id: user1.id })
user_profile2 = UserProfile.create!({ user_id: user2.id })
user_profile3 = UserProfile.create!({ user_id: user3.id })
user_profile4 = UserProfile.create!({ user_id: user4.id })
user_profile5 = UserProfile.create!({ user_id: user5.id })
user_profile6 = UserProfile.create!({ user_id: user6.id })
