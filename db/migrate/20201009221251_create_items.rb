class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.float :price
      t.integer :rating
      t.string :name
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
