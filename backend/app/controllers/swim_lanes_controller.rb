class SwimLanesController < ApplicationController
    before_action :find_swim_lane, only:[:show, :update, :destroy]

    def index
        @swim_lanes = SwimLane.all

        render :json => @swim_lanes
    end 

    def show 
        swimlane_tasks = @swim_lane.tasks
        payload = { swim_lane: @swim_lane, swimlane_tasks: swimlane_tasks }
        render :json => payload
        
    end

    def new
        @swim_lane = SwimLane.new
    end

    def create
        @swim_lane = SwimLane.create(title: params[:title], project_id: params[:project_id])

        render :json => @swim_lane

    end

    def edit
        @swim_lane = SwimLane.find(params[:id])
    end

    def update
    end

    def destroy
        @swim_lane.tasks.each{|task| task.destroy}
        @swim_lane.destroy
        render :json => @swim_lane
    end

    private

    def swim_lane_params
        params.require(:swim_lane).permit(:title, :project_id)
    end

    def find_swim_lane
        @swim_lane = SwimLane.find(params[:id])
    end
end
