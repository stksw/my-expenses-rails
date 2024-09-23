class TransactionDataController < ActionController::API
  before_action :set_transaction_data, only: %i[ update destroy ]

  def index
    @transaction_data = TransactionData.all
  end

  def create
    @transaction_data = TransactionData.new(transaction_data_params)

    if @transaction_data.save
      render json: { data: @transaction_data }, status: :created
    else
      render json: { data: @transaction_data.errors }, status: :unprocessable_entity 
    end
  end

  def update
    if @transaction_data.update(transaction_data_params)
      render json: { data: @transaction_data }, status: :ok
    else
      render json: { data: @transaction_data.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @transaction_data.destroy!
  end

  private

    def set_transation_data
      @transaction_data = TransactionData.find(params[:id])
    end

    def transaction_data_params
      params.require(:transaction_data).permit()
    end
end
