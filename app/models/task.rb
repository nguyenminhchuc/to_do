class Task < ApplicationRecord
  validates :name, presence: true
  enum status: %w(news finish progress close)
end
