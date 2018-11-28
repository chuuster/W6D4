const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.$el.on('click', e => {this.handleClick(e);});
  }

  render() {
    if(this.followState === "unfollowed") {
      return this.$el.html("Follow!");
    }
    else {
      return this.$el.html("Unfollow!");
    }
  }

  handleClick(event) {
    event.preventDefault();

    if (this.followState === "unfollowed") {
      APIUtil.followUser(this.userId)
        .then(() => {
          this.followState = "followed";
          this.render();
        });
    } else {
      APIUtil.unfollowUser(this.userId)
        .then(() => {
          this.followState = "unfollowed";
          this.render();
        });
    }
  }

}

module.exports = FollowToggle;
