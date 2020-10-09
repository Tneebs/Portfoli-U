class TasksController < ApplicationController
    before_action :find_task, only:[:show, :update]

    def index
        @tasks = Task.all

        render :json => @tasks
    end 

    def show 

        render :json => @task
        
    end

    def new
        @task = Task.new
    end

    def create
        @task = Task.new(task_params)
        @task.swim_lane.project.user = current_user

        if @task.save
            render :json => @task.as_json(only: [:id, :title, :description, :label, :comment, :log, :checklist, :swim_lane_id]), :status => :ok
        else 
            render :json => { :msg => 'Task was not created' }, :status => :bad_request
        end
    end

    def edit
        @task = Task.find(params[:id])
    end

    def update
    end

    def delete
    end

    private

    def task_params
        params.require(:task).permit(:title, :description, :label, :comment, :log, :checklist, :swim_lane_id)
    end

    def find_task
        @task = Task.find(params[:id])
    end
end
