api = OpenTable::Client.new

Find restaurants
resp = api.restaurants(:city => "Chicago")

# Process response
resp['count']       # => records found
resp['restaurants'] # => restaurant records

# Fetch a single record
print api.restaurant(81169)
