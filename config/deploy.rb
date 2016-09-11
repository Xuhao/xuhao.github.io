# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'homepage'
set :repo_url, 'git://github.com/Xuhao/xuhao.github.com.git'

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/home/xuhao/apps/#{fetch(:application)}"

set :nginx_config_dir, '/home/xuhao/config/nginx'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
set :log_level, :debug

# Default value for :pty is false
set :pty, true

# Default value for :linked_files is []
# set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

# Default value for linked_dirs is []
# set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5

namespace :deploy do
  %w(start stop restart reload).each do |action|
    desc "#{action} Nginx server"
    task action.to_sym do
      on roles :app do
        within release_path do
          sudo "service nginx #{action}"
        end
      end
    end
  end

  namespace :symlink do
    after :linked_dirs, :create_log_dir do
      on roles :app do
        execute :mkdir, '-pv', "#{fetch(:deploy_to)}/shared/log"
      end
    end
  end

  after :finishing, :linked_nginx_config do
    on roles :app do
      execute :mkdir, '-pv', fetch(:nginx_config_dir)

      target = "#{fetch(:nginx_config_dir)}/#{fetch(:application)}.conf"
      source = "#{current_path}/config/nginx.conf"
      if test "[ -f #{target} ]"
        execute :rm, target
      end
      execute :ln, '-s', source, target
    end
  end
end

namespace :npm do
  task :build do
    on roles fetch(:npm_roles) do
      within fetch(:npm_target_path, release_path) do
        with fetch(:npm_env_variables, {}) do
          execute :npm, 'run', 'build'
          execute :mv, 'b-check', 'build/'
          execute :mv, 'kuaihou', 'build/'
        end
      end
    end
  end

  before 'npm:install', 'npm:prune'
  before 'deploy:updated', 'npm:build'
end
