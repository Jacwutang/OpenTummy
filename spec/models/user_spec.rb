require 'rails_helper'

RSpec.describe User, type: :model do
  let(:new_user) {
    User.new(
      username: 'new_user',
      password: 'password'
    )
  }

  it { should validate_presence_of(:username)}
  it { should validate_presence_of(:password)}
end
