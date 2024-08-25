create_table "bank_accounts", force: :cascade, charset: 'utf8mb4' do |t|
  t.string   "bank_name", null: false
  t.string   "branch", null: false
	t.string   "number", null: false
	t.string   "type", null: false
	t.string   "holder", null: false
	t.timestamps
end