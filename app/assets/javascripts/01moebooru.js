var Moebooru = {
  '__slug__': {}
};
var Moe = jQuery(Moebooru);

Moebooru.addData = function (data) {
  if (data.posts)
    Moe.trigger("post:add", [data.posts]);
  if (data.tags)
    Moe.trigger("tag:add", [data.tags]);
  if (data.votes)
    Moe.trigger("vote:add", [data.votes]);
  if (data.pools)
    Moe.trigger("pool:add", [data.pools]);
  if(data.pool_posts)
    Moe.trigger("pool:add_post", {
      pool_posts: data.pool_posts,
      posts: data.posts
    });
};

Moebooru.attach = function (key, obj) {
  Moebooru['__slug__'][key] = obj;
};

Moebooru.get = function (key) {
  return Moebooru['__slug__'][key];
};

Moebooru.request = function (url, params) {
  jQuery.ajax({
    url: url,
    dataType: 'json',
    data: params
  }).done(function (data) {
    Moe.trigger(url+":ready", data);
  });
};
