class Api::UsersController < ApplicationController

  def index
    render json: User.all
  end
  
  def show
    render json: @user
  end  

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: user.errors, status: 422
    end
  end

  def update
    if user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: 422
    end
  end

  def destroy
    @user.destroy
  end

  private

  def set_item
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end


end
