# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: 'Ted', email: 'ted@mail.com', username: 'Ted', password: '123')
user2 = User.create(name: 'Angelo')
user3 = User.create(name: 'Shivang')
user4 = User.create(name: 'Scott')

p1 = Project.create(title: 'Test Project')

up1 = UserProject.create(user_id: user1.id, project_id: p1.id)
up2 = UserProject.create(user_id: user2.id, project_id: p1.id)

sl1 = SwimLane.create(title: 'backlog', project_id: p1.id)

t1 = Task.create(title: 'test', swim_lane_id: sl1.id)