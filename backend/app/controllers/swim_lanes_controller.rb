class SwimLanesController < ApplicationController
    before_action :find_swim_lane, only:[:show, :update]

    def index
        @swim_lanes = SwimLane.all

        render :json => @swim_lanes
    end 

    def show 

        render :json => @swim_lanes
        
    end

    def new
        @swim_lane = SwimLane.new
    end

    def create
        @swim_lane = SwimLane.new(swim_lane_params)
        @swim_lane.project.user = current_user

        if @swim_lane.save
            render :json => @swim_lane.as_json(only: [:id, :title, :project_id]), :status => :ok
        else 
            render :json => { :msg => 'Project was not created' }, :status => :bad_request
        end
    end

    def edit
        @swim_lane = SwimLane.find(params[:id])
    end

    def update
    end

    def delete
    end

    private

    def swim_lane_params
        params.require(:swim_lane).permit(:title, :project_id)
    end

    def find_swim_lane
        @swim_lane = SwimLane.find(params[:id])
    end
end
