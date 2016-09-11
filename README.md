# [Rubyfans.com](http://rubyfans.com)
> Run on React + Flux + webpack!

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
