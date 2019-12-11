class ItemsController < ApplicationController
    before_action :find_item, only:[:show, :edit, :update, :destroy]

    # GET /items
    def index
        @items = Item.all
        render json: @items
    end

    # GET items/1
    def show
        render json: @item
        
    end

    def new
        @item = Item.new
    end

    def edit
    end

    # POST /items
    def create
        @item = Item.new(item_params)
        if @item.save
            render json: @item, status: :created, location: item_url(@item)
        else
            render json: @item.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /items/1
    def update
        if @item.update(item_params)
            render json: @item
        else
            render json: @item.errors, status: :unprocessable_entity
        end
    end

    def search
        ## @items = Item.where(:title => 'Apple')
        @items = Item.search(params[:search])
    end


    #DELETE /items/1
    def destroy
        @item.destroy
    end
    
    private
        def item_params
            params.require(:item).permit(:title, :description)
        end

        def find_item
            @item = Item.find(params[:id])
        end




end