class UserProjectsController < ApplicationController
    before_action :find_user_project, only:[:show, :update]

    def index
        @user_project = UserProject.all

        render :json => @user_project
    end 

    def show 

        render :json => @user_project
        
    end

    def new
        @user_project = UserProject.new
    end

    def create
    end

    def edit
        @user_project = UserProject.find(params[:id])
    end

    def update
    end

    def delete
    end

    private

    def user_project_params
        params.require(:user_project).permit(:user_id, :project_id)
    end

    def find_user_project
        @user_project = UserProject.find(params[:id])
    end
end

