require 'rails_helper'

RSpec.describe Post, type: :model do
  #pending "add some examples to (or delete) #{__FILE__}"
  before do
    @post = Post.new(title: "CoolPics")
  end

  subject { @post }

  describe "when title is not present" do
    before { @post.title = "" }
    it { should_not be_valid }
  end

  describe "when link is not present" do
    before { @post.link = "" }
    it { should_not be_valid }
  end
end
