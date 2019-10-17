class Seed
  attr_reader :seed
  def initialize
    @seed
  end

  def run
    generate_tasks
  end

  def generate_tasks
    50.times do
      task = Task.new
      task.name = Faker::Lorem.word
      task.details = Faker::Lorem.sentence(100)
      task.status = [0, 1, 2].sample
      task.save!
      puts "Generated task # #{task.id}"
    end
  end
end

seed = Seed.new
seed.run
