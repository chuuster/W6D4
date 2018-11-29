const APIUtil = require('./api_util.js');

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = $('nav input');
    this.$ul = $('ul');
    this.$el.on("input", this.handleInput.bind(this));
  }

  handleInput(event) {
    APIUtil.searchUsers(this.$input.val())
      // .then((res) => {console.log(res)});
      .then(res => this.renderResults(res));
  }

  renderResults(users) {
    $('ul.users').empty();
    users.forEach((user) => {
      $('ul.users').append($(`<li> <a href= user_url(${user.id})>${user.username}</a> </li>`));
    });
  }
}

module.exports = UsersSearch;
