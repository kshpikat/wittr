self.addEventListener('fetch', function(event) {
  console.log(event.request);
    fetch('/foo').then(function (response){
        return response.json();
    }).then(function (data){
       console.log(data)
    }).catch(function (err){
        console.error(err);
    });
    event.respondWith(
        fetch('/imgs/dr-evil.gif')
        //new Response('Hello <a href="" class="a-winner-is-me">link</a>', {
        //    headers: {
        //        'Content-Type':'text/html; charset=UTF-8'
        //    }
        //})
    );
});
