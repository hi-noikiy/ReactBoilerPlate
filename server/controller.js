const https = require('https');
const querystring = require('query-string');

/// Gets the playlists of a given YouTube channel.
exports.example = function (request, response) {
  console.log('Request to do a thing:');
  console.log(request.params);
  const params = {
    param: request.params.channelId
  };

  response.json({message: 'You passed in "' + params.param + '"'});
};