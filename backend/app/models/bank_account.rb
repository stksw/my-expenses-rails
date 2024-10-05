class BankAccount < ApplicationRecord
  self.inheritance_column = :_type_disabled
  has_many :account_transactions
end
