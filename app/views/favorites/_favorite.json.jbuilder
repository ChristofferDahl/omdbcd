json.extract! favorite, :id, :omdbid, :created_at, :updated_at
json.url favorite_url(favorite, format: :json)
