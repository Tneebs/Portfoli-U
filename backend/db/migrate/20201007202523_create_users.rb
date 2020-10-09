class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.string :picture
      t.integer :age
      t.string :email
      t.string :phone
      t.string :skill
      t.string :work
      t.string :education

      t.timestamps
    end
  end
end
