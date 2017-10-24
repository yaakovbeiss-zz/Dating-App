class ChangeUsernameToEmailAndAddFirstNameLastName < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :gender, :string, null: false
    remove_column :users, :username
  end
end
