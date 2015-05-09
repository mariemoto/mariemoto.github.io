 $(document).ready(function () {
            $('.flag').waypoint(function (direction) {
                if (direction == 'down') {
                    $('header').css("top", "-130px");
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





$(function() {
    
    function submitClick (){
    
        var Vname= $("#nameText").val();
        var Vemail= $("#emailText").val();
        var Vpassword= $("#passwordText").val();
        
        $.ajax({
            data: "data.json",
            success: function(data) {
                var thankyou = data.thankyou;
                 $(".results").fadeIn();
                $("#sentence .message").html(thankyou);
                $("#sentence .name").html(Vname);
                $("#sentence .email").html(Vemail);
                $("#sentence .password").html(Vpassword);
            
            }
        });
    
    }
        $(".results").hide();
        $("#submitCTA").click(submitClick); 
    
})

