self.addEventListener('fetch', function (event) {
    //console.log(event.request);
    let url = event.request.url;
    console.log(url);
    if (url.endsWith('.jpg')) {
        event.respondWith(
            fetch('/imgs/dr-evil.gif')
        );
    }
    //new Response('Hello <a href="" class="a-winner-is-me">link</a>', {
    //    headers: {
    //        'Content-Type': 'text/html; charset=UTF-8'
    //    }
    //})
  //event.respondWith(
  //  fetch('/imgs/dr-evil.gif')
  //);
});

