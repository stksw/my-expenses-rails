class AccountTransactionImportsController < ApplicationController
  def create
    if params[:file].nil?
      render json: { error: 'ファイルが提供されていません' }, status: :bad_request
      return
    end

    begin
      success_count, error = AccountTransaction.import(params[:file])
      if error.empty?
        render json: { message: "#{success_count}件の取引がインポートされました" }, status: :ok
      else
        render json: { message: error }, status: :unprocessable_entity
      end
    rescue Exception => e
      render json: { error: '無効なファイル形式です' }, status: :unprocessable_entity
      return
    end
  end

end