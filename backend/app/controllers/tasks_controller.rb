class TasksController < ApplicationController
    before_action :find_task, only:[:show, :update, :destroy]

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

        @task = Task.create(title: params[:title], swim_lane_id: params[:swim_lane_id])


        render :json => @task
        # if @task.save
        #     render :json => @task.as_json(only: [:id, :title, :description, :label, :comment, :log, :checklist, :swim_lane_id]), :status => :ok
        # else 
        #     render :json => { :msg => 'Task was not created' }, :status => :bad_request
        # end
    end

    def edit
        @task = Task.find(params[:id])
    end

    def update
    end

    def destroy
        @task.destroy
        render :json => @task
    end

    private

    def task_params
        params.require(:task).permit(:title, :swim_lane_id)
    end

    def find_task
        @task = Task.find(params[:id])
    end
end
