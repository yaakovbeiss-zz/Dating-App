class Api::UsersController < ApplicationController

  def create
    @user = user.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = user.includes(:posts, :comments, :votes).find(params[:id])
  end

  def index
    @users = user.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
