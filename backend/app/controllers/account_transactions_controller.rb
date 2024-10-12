class AccountTransactionsController < ActionController::API
  before_action :set_account_transaction, only: %i[ update destroy ]

  def index
    @account_transactions = AccountTransaction.with_bank_account()
    render json: { data: @account_transactions, totalCount: @account_transactions.count }
  end

  def create
    @account_transaction = AccountTransaction.new(account_transaction_params)

    if @account_transaction.save
      render json: { data: @account_transaction }, status: :created
    else
      render json: { data: @account_transaction.errors }, status: :unprocessable_entity 
    end
  end

  def update
    if @account_transaction.update(account_transaction_params)
      render json: { data: @account_transaction }, status: :ok
    else
      render json: { data: @account_transaction.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @account_transaction.destroy!
  end

  private

    def set_account_transaction
      @account_transaction = AccountTransaction.find(params[:id])
    end

    def account_transaction_params
      params.require(:account_transaction).permit(:recorded_at, :description, :type, :amount, :large_category, :middle_category, :bank_account_id)
    end
end
