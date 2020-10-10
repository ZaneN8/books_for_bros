require "faker"

Sample.destroy_all
5.times do |i|
  Sample.create(name: Faker::Name.name)
end


User.create(name: "Zane")


5.times do |i|

  user = User.new
  user.id = i
  user.email = "test#{i}@test.com"
  user.password = "123456"
  user.name = Faker::Name.name
  user.save!
  puts user.name = "was made"

  1.times do |c|
    cart = Cart.new
    cart.id = c + (i *3)
    cart.user_id = i
    cart.save!
    puts 'Carts seeded'
  end
end

50.times do |b|
  item = Item.new
  item.name = Faker::Book.title
  item.id = b
  item.price = 10
  item.rating = rand(5)
  item.description = Faker::Company.catch_phrase
  item.image = Faker::LoremPixel.image(category: 'business')
  item.save!

  puts "#{item.name} Was made"

end


puts "Seed Works"