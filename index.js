$(document).ready(function () {


    $("#view_button").click(function (e) {
        e.preventDefault();
        let date = $("#date").val();

        $.get('https://api.nasa.gov/planetary/apod',
            {
                date: date,
                api_key: "DEMO_KEY"
            })
            .done(function (data) {
                $("#pic").attr('src', data.url);
                $("#title").html(data.title);

                console.log(data)


            });
    })
});

