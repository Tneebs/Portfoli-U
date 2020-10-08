class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description
      t.string :label
      t.string :comment
      t.string :log
      t.string :checklist
      t.references :swim_lane, null: false, foreign_key: true

      t.timestamps
    end
  end
end
