create_table "account_transactions", force: :cascade, charset: 'utf8mb4' do |t|
	t.references :bank_account
	t.date		 "recorded_at", null: false
	t.string   "description", null: false
	t.string   "type", null: false
	t.string   "amount", null: false
	t.string   "large_category"
	t.string   "middle_category"
	t.timestamps
end