set :application, 'homepage'
set :repo_url, 'git://github.com/Xuhao/xuhao.github.com.git'
# ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }

set :deploy_to, '/home/xuhao/apps/homepage'
# set :scm, :git
set :nginx_config_dir, '/home/xuhao/config/nginx'

# set :format, :pretty
# set :log_level, :debug
set :pty, true

# set :keep_releases, 5

namespace :nginx do
  %w(start stop restart reload force-reload status configtest).each do |action|
    desc "#{action} Nginx server"
    task action.to_sym do
      on roles(:all) do
        execute :sudo, "service nginx #{action}"
      end
    end
  end
end

namespace :deploy do
  %w(start stop restart reload).each do |action|
    desc "#{action} Nginx server"
    task action.to_sym do
      # TODO: pty looks not working, revert below line after pty works.
      # invoke "nginx:#{action}"
    end
  end

  namespace :symlink do
    after :linked_dirs, :create_log_dir do
      on roles :app do
        execute :mkdir, '-pv', "#{fetch(:deploy_to)}/shared/log"
      end
    end

    after :linked_dirs, :linked_nginx_config do
      on roles :app do
        execute :mkdir, '-pv', fetch(:nginx_config_dir)

        target = "#{fetch(:nginx_config_dir)}/#{fetch(:application)}.conf"
        source = "#{current_path}/config/nginx.conf"
        unless test "[ -L #{target} ]"
          if test "[ -f #{target} ]"
            execute :rm, target
          end
          execute :ln, '-s', source, target
        end
      end
    end
  end

  after :finishing, 'deploy:cleanup'

end
