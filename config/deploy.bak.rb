set :application, "homepage"
set :repository,  "git://github.com/Xuhao/xuhao.github.com.git"
set :branch, "master"
set :deploy_via, :remote_cache

set :user, "xuhao"
set :use_sudo, false
default_run_options[:pty] = true
set :ssh_options, { :forward_agent => true }

set :user_dir, "/home/xuhao"
set :etc_dir, "#{user_dir}/etc"
set :deploy_to, "#{user_dir}/apps/#{application}"

server "115.29.162.29", :app, :web, :db, :primary => true

after "deploy:restart", "deploy:cleanup"
after "deploy:setup", "deploy:setup_config"
after "deploy:create_symlink", "deploy:create_config_symlink"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
namespace :deploy do
  task :start do ; end
  task :stop do ; end
  task :restart do; end

  namespace :nginx do
    %w(start stop restart reload force-reload status configtest).each do |action|
      task action.to_sym do
        run "service nginx #{action}"
      end
    end
  end

  task :setup_config, roles: :app do
    run "mkdir -p #{etc_dir}/nginx/conf.d"
    run "mkdir -p #{shared_path}/config"
    run "chmod g+w #{etc_dir}/nginx/conf.d #{shared_path}/config"
  end

  task :create_config_symlink, roles: :app do
    run "ln -nfs #{current_path}/config/nginx.conf #{etc_dir}/nginx/conf.d/#{application}.conf"
  end
end

