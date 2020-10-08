class CreateSwimLanes < ActiveRecord::Migration[6.0]
  def change
    create_table :swim_lanes do |t|
      t.string :title
      t.references :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
