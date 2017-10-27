class Api::UserProfileController < ApplicationController

  def create
    @user_profile = UserProfile.new(user_profile_params)
    @user_profile.user_id = current_user.id

    if @user_profile.save
      render :show
    else
      render json: @user_profile.errors.full_messages, status: 422
    end

  end

  private

  def user_profile_params
    params.require(:user_profile).permit(:user_id, :image)
  end

end
