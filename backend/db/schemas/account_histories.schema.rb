create_table "account_histories", force: :cascade, charset: 'utf8mb4' do |t|
  t.references :bank_account
	t.date		 "recorded_at", null: false
  t.integer  "blance", null: false
	t.timestamps
end