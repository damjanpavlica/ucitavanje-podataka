$.ajax('https://randomuser.me/api/?results=10')
    .done(function(data) {
        console.log(data.results);
        $('body').html(data.results[0].email)
    })
