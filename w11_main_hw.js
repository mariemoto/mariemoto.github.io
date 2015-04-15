$(function() {
    
    function submitClick (){
    
        var Vnoun = $("#nounText").val();
        var VPadjective= $("#adjectivePText").val();
        var VNadjective1= $("#adjectiveN1Text").val();
        var VNadjective2= $("#adjectiveN2Text").val();
        var Vverb= $("#verbText").val();
        
        $(".results").fadeIn();
        $("#sentence .noun").html(Vnoun);
        $("#sentence .Padjective").html(VPadjective);
        $("#sentence .Nadjective1").html(VNadjective1);
        $("#sentence .Nadjective2").html(VNadjective2);
        $("#sentence .verb").html(Vverb);
        $(".results").css("background-color", Vcolor);
    
    }
        $(".results").hide();
        $("#submitCTA").click(submitClick); 
    
})