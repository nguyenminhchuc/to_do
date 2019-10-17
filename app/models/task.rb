class Task < ApplicationRecord
  enum status: %w(finish progress close)
end
