set :stage, :production

server 'rubyfans.com',
  user: 'xuhao',
  roles: %w{web app},
  ssh_options: {
    # keys: %w(/Users/xuhao/.ssh/id_rsa),
    forward_agent: true
  }
