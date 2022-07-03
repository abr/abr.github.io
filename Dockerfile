FROM ruby:3.1.2-bullseye

ENV BROWSER=none

RUN adduser --disabled-password abr
RUN gem install bundler -v 2.3.17

USER abr
WORKDIR /home/abr/src

COPY Gemfile Gemfile.lock ./
RUN bundle config set path /home/abr/bundle && bundle install

ADD . .

CMD bundle exec jekyll serve --host 0.0.0.0
