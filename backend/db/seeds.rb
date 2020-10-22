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
p2 = Project.create(title: 'Portfoli-U')
p3 = Project.create(title: 'Tactics Lite')
p4 = Project.create(title: 'MPloy!')
p5 = Project.create(title: 'Armadillo Trading Co.')


up1 = UserProject.create(user_id: 2, project_id: p1.id)
up2 = UserProject.create(user_id: 3, project_id: p1.id)

up3 = UserProject.create(user_id: 7, project_id: p2.id)
up4 = UserProject.create(user_id: 7, project_id: p3.id)
up5 = UserProject.create(user_id: 7, project_id: p4.id)
up6 = UserProject.create(user_id: 7, project_id: p5.id)


sl1 = SwimLane.create(title: 'backlog', project_id: p1.id)
sl2 = SwimLane.create(title: 'in progress', project_id: p1.id)
sl3 = SwimLane.create(title: 'review', project_id: p1.id)
sl4 = SwimLane.create(title: 'completed', project_id: p1.id)
sl5 = SwimLane.create(title: 'canceled', project_id: p1.id)

t1 = Task.create(title: 'test', swim_lane_id: sl1.id)
t2 = Task.create(title: 'boing', swim_lane_id: sl1.id)
t3 = Task.create(title: 'swish', swim_lane_id: sl1.id)
t4 = Task.create(title: 'sveeng', swim_lane_id: sl2.id)
t5 = Task.create(title: 'raur', swim_lane_id: sl2.id)

t6 = Task.create(title: 'punch', swim_lane_id: sl2.id)
t7 = Task.create(title: 'bite', swim_lane_id: sl3.id)
t8 = Task.create(title: 'spit', swim_lane_id: sl3.id)
t9 = Task.create(title: 'lick', swim_lane_id: sl3.id)
t10 = Task.create(title: 'spider', swim_lane_id: sl4.id)

t11 = Task.create(title: 'ruler', swim_lane_id: sl4.id)
t12 = Task.create(title: 'inch worm', swim_lane_id: sl4.id)
t13 = Task.create(title: 'stone', swim_lane_id: sl5.id)
t14 = Task.create(title: 'glass', swim_lane_id: sl5.id)
t15 = Task.create(title: 'grass', swim_lane_id: sl5.id)



