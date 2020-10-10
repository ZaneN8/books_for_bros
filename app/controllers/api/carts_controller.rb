class Api::CartsController < ApplicationController
  before_action: :set_user, only: [:index, :show, :create, :update, :destroy]
  before_action: :set_cart, only: [:show, :update, :destroy]

  def index
    render json: Cart.all
    # render json: current_user.carts.all
  end

  def show
    render json: @cart
    # render json: current_user
  end

  def create
    cart = Cart.new(cart_params)
    # cart = current_user.carts.new(cart_params)
    if cart.save
      render json: cart
    else
      render json: cart.errors, status: 422
  end

  def update
    if @cart.update(cart_params)
      render json: @cart
    else 
      render json: @cart.errors, status: 422
  end

  def destroy
    @cart.destroy
  end

  private

  def set_cart
    @cart = Cart.find(params[:id])
  end

  def cart_params
    params.require(:cart).permit()
  end

  def set_user
    @user = User.find(params[:id])
  end

end
