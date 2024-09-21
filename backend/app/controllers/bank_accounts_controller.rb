class BankAccountsController < ActionController::API
  before_action :set_bank_account, only: %i[ update destroy ]

  def index
    @bank_accounts = BankAccount.all
    render json: { data: @bank_accounts, totalCount: @bank_accounts.count }
  end

  def create
    @bank_account = BankAccount.new(bank_account_params)

    if @bank_account.save
      render json: @bank_account, status: :ok
    else
      render json: @bank_account.errors, status: :unprocessable_entity
    end
  end

  def update
    if @bank_account.update(bank_account_params)
      render json: { data: @bank_account }
    else
      render json: @bank_account.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @bank_account.destroy!
  end

  private

    def set_bank_account
      @bank_account = BankAccount.find(params[:id])
    end

    def bank_account_params
      params.require(:bank_account).permit(:bank_name, :branch, :account_number, :account_type, :account_holder)
    end
end
