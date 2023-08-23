//Add and remove songs and albums from favorites
function toggleFavorite(e, a) {
  e.preventDefault();
  $(a).toggleClass('active');

  var songId = $(a).closest(".list__item").attr("data-song-id");
  var song = $(a).closest(".list__item").attr("data-song-name");
  var artist = $(a).closest(".list__item").attr("data-song-artist");
  var cover = $(a).closest(".list__item").attr("data-song-cover");

  if (localStorage.getItem('faveSongs') == null) {
    localStorage.setItem('faveSongs', '[]')
  }

  var faveSongs = JSON.parse(localStorage.getItem('faveSongs'));
  faveSongs.push({
    id: songId,
    song: song,
    artist: artist,
    cover: cover
  });

  localStorage.setItem('faveSongs', JSON.stringify(faveSongs));

}



//View songs and albums added to favorites
function viewFavorites() {

  var faveSongs = JSON.parse(localStorage.getItem('faveSongs'));
  var htmlCode = "";
  if (localStorage.getItem("faveSongs") != null) {
    for (var i = 0; i < faveSongs.length; i++) {
      htmlCode += `<div class="list__item" data-song-id="1" data-song-name="I love you mummy"
                data-song-artist="Casper Nyovest" data-song-album="Mummy" data-song-url="audio/ringtone-1.mp3"
                data-song-cover="images/cover/small/1.jpg">
                <div class="list__cover">
                  <img src="${faveSongs[i].cover}" alt="I love you mummy" />
                  <a href="javascript:void(0);" class="btn btn-play btn-sm btn-default btn-icon rounded-pill"
                    data-play-id="1" aria-label="Play pause"><i class="ri-play-fill icon-play"></i>
                    <i class="ri-pause-fill icon-pause"></i></a>
                </div>
                <div class="list__content">
                  <a href="song-details.html" class="list__title text-truncate">${faveSongs[i].song}</a>
                  <p class="list__subtitle text-truncate">
                    <a href="artist-details.html">${faveSongs[i].artist}</a>
                  </p>
                </div>
                <ul class="list__option">
                  <li>
                    <a href="javascript:void(0);" role="button" class="d-inline-flex active" aria-label="Favorite"
                      data-favorite-id="1"><i class="ri-heart-line heart-empty"></i>
                      <i class="ri-heart-fill heart-fill"></i></a>
                  </li>
                  <li>01:14</li>
                  <li class="dropstart d-inline-flex">
                    <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown"
                      aria-label="Cover options" aria-expanded="false"><i class="ri-more-fill"></i></a>
                    <ul class="dropdown-menu dropdown-menu-sm">
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="1">Add to
                          playlist</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="1">Add to
                          queue</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);" role="button" data-next-id="1">Next to
                          play</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);" role="button">Share</a>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);" role="button" data-play-id="1">Play</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>`
    }
    document.getElementById("faveSongs").innerHTML = htmlCode;

  }
}

//View history of songs and albums played
function addToHistory(e, a) {
  e.preventDefault();
  $(a).toggleClass('.btn.amplitude-playing');

  var song = $(a).closest(".list__item").attr("data-song-name");
  var artist = $(a).closest(".list__item").attr("data-song-artist");
  var cover = $(a).closest(".list__item").attr("data-song-cover");

  if (localStorage.getItem('history') == null) {
    localStorage.setItem('history', '[]')
  }

  var history = JSON.parse(localStorage.getItem('history'));
  history.push({
    song: song,
    artist: artist,
    cover: cover
  });

  localStorage.setItem('history', JSON.stringify(history));

}

//View history
function viewHistory() {

  var history = JSON.parse(localStorage.getItem('history'));
  var htmlCode = "";
  if (localStorage.getItem("history") != null) {
    for (var i = 0; i < history.length; i++) {
      htmlCode += `<div class="list__item" data-song-id="" data-song-name="${history[i].song}"
                data-song-artist="${history[i].artist}" data-song-album="Mummy" data-song-url="audio/ringtone-1.mp3"
                data-song-cover="images/cover/small/1.jpg">
                <div class="list__cover">
                  <img src="${history[i].cover}" alt="I love you mummy" />
                  <a href="javascript:void(0);" class="btn btn-play btn-sm btn-default btn-icon rounded-pill"
                    data-play-id="1" aria-label="Play pause"><i class="ri-play-fill icon-play"></i>
                    <i class="ri-pause-fill icon-pause"></i></a>
                </div>
                <div class="list__content">
                  <a href="song-details.html" class="list__title text-truncate">${history[i].song}</a>
                  <p class="list__subtitle text-truncate">
                    <a href="artist-details.html">${history[i].artist}</a>
                  </p>
                </div>
                <ul class="list__option">
                  <li>
                    <a href="javascript:void(0);" role="button" class="d-inline-flex active" aria-label="Favorite"
                      data-favorite-id="1"><i class="ri-heart-line heart-empty"></i>
                      <i class="ri-heart-fill heart-fill"></i></a>
                  </li>
                  <li>01:14</li>
                  <li class="dropstart d-inline-flex">
                    <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown"
                      aria-label="Cover options" aria-expanded="false"><i class="ri-more-fill"></i></a>
                    <ul class="dropdown-menu dropdown-menu-sm">
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="1">Add to
                          playlist</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="1">Add to
                          queue</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);" role="button" data-next-id="1">Next to
                          play</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);" role="button">Share</a>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);" role="button" data-play-id="1">Play</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>`
    }
    document.getElementById("history").innerHTML = htmlCode;

  }
}


function userName() {
  var firstName = localStorage.getItem("firstName");
  var lastName = localStorage.getItem("lastName");

  document.getElementById("user_name").innerHTML = firstName;
  document.getElementById("avatar__title").innerHTML = firstName + " " + lastName;
}