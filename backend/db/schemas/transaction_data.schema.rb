create_table "transaction_data", force: :cascade, charset: 'utf8mb4' do |t|
	t.date		 "recorded_at", null: false
	t.string   "type", null: false
	t.string   "description", null: false
	t.string   "amount", null: false
	t.string   "large_category"
	t.string   "middle_category"
	t.timestamps
end