var nomeDoFilme = "";
var video_id = "";


function fazTudo() {
// Initializes the client with the API key and the Translate API.
gapi.client.init({
  'apiKey': 'AIzaSyB84gJCbe1187PcHqeUuNoTFun5ng-6Oiw',
  'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
}).then(function() {
    return gapi.client.youtube.search.list({
            q: nomeDoFilme + " trailer",
            part: 'snippet'
          });
}).then(function(response) {
  var Resultado = response.result;
  $('#search-results').append(JSON.stringify(Resultado, null, 4));
  var Trailer = Resultado.items[0];
  var video_id = Trailer.id.videoId;
  console.log("ID obtido: " + video_id);

    var video = {
    "video": 
    {
      "frame": "<iframe title='YouTube video player' type=\"text/html\" width='640' height='390' src='https://www.youtube.com/embed/" + video_id + "' frameborder='0' allowFullScreen></iframe>" 
    }
  }

  $("#divDoVideo").html(video.video.frame);
}, function(reason) {
  console.log('Error: ' + reason.result.error.message);
});
};

function ChamaOFazTudo(_nomeDoFilme) {
	nomeDoFilme = _nomeDoFilme;
	gapi.load('client', fazTudo);
      }