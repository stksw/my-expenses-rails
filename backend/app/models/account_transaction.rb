class AccountTransaction < ApplicationRecord
  self.inheritance_column = :_type_disabled
  belongs_to :bank_account

  enum :type, { deposit: 'deposit', withdrawal: 'withdrawal' }, default: 'withdrawal'

  def self.with_bank_account
    joins(:bank_account).map do |account_transaction|
      account_transaction.attributes.merge(bank_name: account_transaction.bank_account.bank_name)
    end
  end

end
