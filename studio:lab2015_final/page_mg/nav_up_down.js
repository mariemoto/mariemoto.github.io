 $(document).ready(function () {
            $('.flag').waypoint(function (direction) {
                if (direction == 'down') {
                    $('header').css("top", "-100px");
                    $('header').css("font-size", "100%");
                    $('.navlist').css("margin-top", "0.5%");
                    $('bh').css("display","none");
                    $('section').css("height", "95vh");
                    $('container').css("top", "5vh");
                    
                }
                if (direction == 'up') {
                    $('header').css("top", "0");
                    $('header').css("font-size", "200%");
                    $('.navlist').removeAttr("style");
                    $('section').css("height", "80vh");
                    $('container').css("top", "15vh");
                }
            }, {
                offset: '99%'
            });
     
     
            function requestFile(url){
                $.ajax(
                    {
                        url: url,
                        cache: false,
                        success: function(data){
                            $("#ajaxcontainer").html(data);
                        }
                    }
                );
            }
            
            $("#ajaxrequest5").click(function(){
                requestFile("article1.html");
                }
            )
            
            $("#ajaxrequest1").click(function(){
                requestFile("article2.html");
                }
            )
     
        });

// for article2//

     

var image_more = '.image-container_more',
  slide = $(image_more + ' img').innerWidth();

function append() {
  $(image_more + ' img').first().appendTo($(image_more));
}

function prepend() {
  $(image_more + ' img').last().prependTo($(image_more));
}

$('.prev').click(function() {
  prepend();
});
$('.next').click(function() {
  append();
});

// for article2 end//