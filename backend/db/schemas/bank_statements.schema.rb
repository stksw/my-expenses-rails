create_table "bank_statements", force: :cascade, charset: 'utf8mb4' do |t|
	t.string   "type", null: false
	t.string   "recorder", null: false
	t.string   "amount", null: false
	t.string   "large_category"
	t.string   "middle_category"
	t.timestamps
end