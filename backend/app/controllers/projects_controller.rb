require 'uri'

class ProjectsController < ApplicationController
    before_action :find_project, only:[:show, :update]


    def index
        if current_user
            @projects = Project.all
            render :json => @projects
        else
            render :json => { :msg => 'Forget to Login?' }
        end
    end 

    def show 

        render :json => @project
        
    end

    def new
        @project = Project.new
    end

    def create
        @project = Project.new(project_params)

        if @project.save
            UserProject.create(user_id: params[:user_id], project_id: @project.id)
            render :json => @project.as_json(only: [:id, :title]), :status => :ok
        else 
            render :json => { :msg => 'Project was not created' }, :status => :bad_request
        end
    end


    def edit
        @project = Project.find(params[:id])
    end

    def update
    end

    def destroy
        if @project.user == current_user
            @project.destroy
            render :json => { :msg => 'Project was removed' }, :status => :ok
        else
            render :json => { :msg => "No no no, you can't do that" }, :status => :ok
        end
    end

    private

    def project_params
        params.require(:project).permit(:title)
    end

    def find_project
        @project = Project.find(params[:id])
    end
end

