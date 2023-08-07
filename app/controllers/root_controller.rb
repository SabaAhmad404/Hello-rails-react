class RootController < ApplicationController
  def index
    @greeting = Greeting.order('RANDOM()').first
    render plain: @greeting.message
  end
end
