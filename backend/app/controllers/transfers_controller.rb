class TransfersController < ActionController::API
  before_action :set_transfer, only: %i[ show update destroy ]

  def index
    @transfers = Transfer.all
  end

  def show
  end

  def create
    @transfer = Transfer.new(transfer_params)

    respond_to do |format|
      if @transfer.save
        format.json { render :show, status: :created, location: @transfer }
      else
        format.json { render json: @transfer.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @transfer.update(transfer_params)
        format.json { render :show, status: :ok, location: @transfer }
      else
        format.json { render json: @transfer.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @transfer.destroy!
  end

  private
    def set_transfer
      @transfer = Transfer.find(params[:id])
    end

    def transfer_params
      params.fetch(:transfer, {})
    end
end
