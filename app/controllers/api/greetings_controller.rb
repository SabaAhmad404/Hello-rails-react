class Api::GreetingsController < ApplicationController
  def random
    @random_greeting = Greeting.order('RANDOM()').first
    render json: @random_greeting

    @greeting = Greeting.order('RANDOM()').first
    render plain: @random_greeting.message
  end
end
