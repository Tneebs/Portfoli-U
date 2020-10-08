class UsersController < ApplicationController
    before_action :find_user, only:[:show, :update]

    def index
        @users = User.all

        render :json => @users
    end 

    def show 

        render :json => @user
        
    end

    def new
        @user = User.new
    end

    def create
        @user = User.create(user_params)
        payload = { user_id: @user.id }
        token = JWT.encode(payload,ENV['CRYPT_KEY'], 'HS256')
        render :json => @user.as_json(except: [:password]), :status => :ok
    end

    def edit
        @user = User.find(params[:id])
    end

    def update
    end

    def delete
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :name, :picture, :age, :email, :phone, :skill, :work, :education)
    end

    def find_user
        @user = User.find(params[:id])
    end
    
end

