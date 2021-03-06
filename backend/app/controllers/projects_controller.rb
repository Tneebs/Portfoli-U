require 'uri'

class ProjectsController < ApplicationController
    before_action :find_project, only:[:show, :update, :destroy]


    def index
        if current_user
            @projects = Project.all
            render :json => @projects
        else
            render :json => { :msg => 'Forget to Login?' }
        end
    end 

    def show 
        @project_swimlanes = @project.swim_lanes
        render :json => { project: @project, project_swimlanes: @project_swimlanes }
        
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
        @project.user_projects.each{|up| up.destroy}
        @project.swim_lanes.each{|swimlane| swimlane.destroy}
        @project.destroy
        render :json => @project
    end

    private

    def project_params
        params.require(:project).permit(:title)
    end

    def find_project
        @project = Project.find(params[:id])
    end
end

