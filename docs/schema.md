# Schema Information

## users
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
first_name  | string    | not null
last_name   | string    | not null
email       | string    | not null, indexed
birthday    | date      | not null
gender      | string    | not null

## user_profiles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users),indexed
image       | string    | file_name, content_type, file_size, updated_at


## friendships
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
user_id           | integer   | not null
friend_user_id    | integer   | not null, foreign key (references users), indexed
