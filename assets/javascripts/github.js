jQuery.githubUser = function(username, callback) {
  jQuery.getJSON("https://api.github.com/users/" + username + "/repos?callback=?", callback);
}

jQuery.fn.loadRepositories = function(username) {
  // this.html("<span>Querying GitHub for repositories...</span>");

  var target = this;
  $.githubUser(username, function(data) {
    var repos = data.data;
    sortByNumberOfWatchers(repos);

    var repos_items = [];
    target.empty();
    $(repos).each(function() {
      repos_items.push("<li><a href='" + this.html_url + "' target='_blank'>" + this.name + "</a> (" + this.description + ", Base on " + this.language + ")</li>");
    });
    target.append(repos_items.join(''));
  });

  function sortByNumberOfWatchers(repos) {
    repos.sort(function(a, b) {
      return b.watchers - a.watchers;
    });
  }
};
