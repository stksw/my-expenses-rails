create_table "transfers", force: :cascade, charset: 'utf8mb4' do |t|
	t.string   "type", null: false
	t.string   "recorder", null: false
	t.string   "amount", null: false
	t.timestamps
end