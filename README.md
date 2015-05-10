# [Rubyfans.com](http://rubyfans.com)
> Run on React + Flux + webpack!

Before development
------
#### Runtime for Sublime Plugins
    npm install -g eslint       # ESLint
    npm install -g babel-eslint # lint all valid Babel code with the ESLint
#### Sublime Plugins
  * **[SublimeLinter](https://packagecontrol.io/packages/SublimeLinter)**: Framework for code linting, dependencies of below packages
  * **[babel-sublime](https://github.com/babel/babel-sublime)**: Syntax definitions for ES6 JavaScript with React JSX extensions
  * **[babel-eslint](https://github.com/babel/babel-eslint)**: Allows you to lint ALL valid Babel code with the ESLint.
  * **[SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint)**: Linter plugin for SublimeLinter provides an interface to ESLint.

Developing
------
#### Run development server
    webpack-dev-server --progress --colors

It binds a small express server on localhost:8080 which serves your static assets as well as the bundle (compiled automatically). It automatically updates the browser page when a bundle is recompiled (socket.io).

Deploy
------
#### Add hooks in capistrano for npm

```ruby
namespace :npm do
  task :build do
    on roles fetch(:npm_roles) do
      within fetch(:npm_target_path, release_path) do
        with fetch(:npm_env_variables, {}) do
          execute :npm, 'run', 'build'
        end
      end
    end
  end

  before 'npm:install', 'npm:prune'
  before 'deploy:updated', 'npm:build'
end
```
