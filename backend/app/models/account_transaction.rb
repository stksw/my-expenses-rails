class AccountTransaction < ApplicationRecord
  self.inheritance_column = :_type_disabled

  enum :type, { deposit: 'deposit', withdrawal: 'withdrawal' }, default: 'withdrawal'

end
