$(function() {
      
        function requestFile(url){
     $.ajax(
            {
                url: url,
                cache: false,
                dataType:"json",
                success: function(data){
                         $("#result").html(data.status);                      
                  }
             }
        );
      }

    $("#ajaxrequest").click(
        function(){requestFile("data.json");
            
        }
    )
    
        }
    );


