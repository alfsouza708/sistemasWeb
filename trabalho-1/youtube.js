
function pegaVideoDoYouTube (nomeDoFilme) {
	var gAPI = "AIzaSyB84gJCbe1187PcHqeUuNoTFun5ng-6Oiw";   //KEY DA API DO GOOGLE
	var stringBusca = nomeDoFilme + " trailer";

	gAPI.client.init({
	    'apiKey': gAPI, 
	    'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
	  }).then(buscaVideo(stringBusca)).then(function(response) {
	  	var Resultado = response.result;
	    $('#search-results').append(JSON.stringify(Resultado, null, 4))
	    var Trailer = Resultado.items[0];
	    return Trailer.id.videoId;
	  });

	}

function buscaVideo(stringBusca) {
	    return gAPI.client.youtube.search.list({
	      q: stringBusca,
	      part: 'snippet'
	    });
	  }

function poeVideoNaPagina(videoID) {
	var video = {
		"video": 
		{
			"frame": "<iframe title='YouTube video player' type=\"text/html\" width='640' height='390' src='https://www.youtube.com/embed/{videoID}' frameborder='0' allowFullScreen></iframe>" 
		}
	}

	$("#divDoVideo").html(video.video.frame);
}

function colocaTrailerNaPagina(nomeDoFilme) {
    console.log("chamando pegaVideoDoYouTube");
    var videoId = pegaVideoDoYouTube(nomeDoFilme);
    console.log("ID RETORNADO: " + videoId);
    console.log("Pondo video na página...");
	poeVideoNaPagina(videoId);
}
