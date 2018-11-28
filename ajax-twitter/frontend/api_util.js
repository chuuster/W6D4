const APIUtil = {
  followUser: id => {
    return APIUtil.changeFollowStatus(id, 'POST');
  },

  unfollowUser: id => {
    return APIUtil.changeFollowStatus(id, 'DELETE');
  },

  changeFollowStatus: (id, method) => {
    return $.ajax ({
      url: `/users/${id}/follow`,
      method: method,
      dataType: "JSON"
    });
  }
};

module.exports = APIUtil;
