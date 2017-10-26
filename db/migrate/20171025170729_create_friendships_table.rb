class CreateFriendshipsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :friendships do |t|
      t.integer :user_id, null: false
      t.integer :friend_user_id, null: false
    end

    add_index(:friendships, [:user_id, :friend_user_id], :unique => true)
    add_index(:friendships, [:friend_user_id, :user_id], :unique => true)
  end
end
