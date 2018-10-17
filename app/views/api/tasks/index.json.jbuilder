json.set! :tasks do
  json.array! @task do |task|
    json.extract! task, :id, :name, :is_done, :created_at, :updated_at
  end
end
