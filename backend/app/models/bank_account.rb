class BankAccount < ApplicationRecord
  self.inheritance_column = :_type_disabled
  has_many :account_transactions

  def name_with_branch
    "#{bank_name} #{branch}"
  end
end
