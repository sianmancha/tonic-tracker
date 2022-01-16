class CreateMedications < ActiveRecord::Migration[6.1]
  def change
    create_table :medications do |t|
      t.string :name
      t.string :use
      t.integer :amount
      t.boolean :refillable
      t.integer :dose
      t.integer :frequency
      t.boolean :active

      t.timestamps
    end
  end
end
