class TransfersController < ActionController::API
  before_action :set_transfer, only: %i[ update destroy ]

  def index
    @transfers = Transfer.all
  end

  def create
    @transfer = Transfer.new(transfer_params)

    if @transfer.save
      render json: { data: @transfer }, status: :created
    else
      render json: { data: @transfer.errors }, status: :unprocessable_entity 
    end
  end

  def update
    if @transfer.update(transfer_params)
      render json: { data: @transfer }, status: :ok
    else
      render json: { data: @transfer.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @transfer.destroy!, status: :ok
  end

  private
    def set_transfer
      @transfer = Transfer.find(params[:id])
    end

    def transfer_params
      params.require(:transfer).permit(:amount, )
    end
end
