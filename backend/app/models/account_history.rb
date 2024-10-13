class AccountHistory < ApplicationRecord
  belongs_to :bank_account
  validates :blance, :recorded_at, presence: true


end
