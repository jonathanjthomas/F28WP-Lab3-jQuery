//Exercise 1
$(document).ready(function(){
    $("p.hideme").click(function(){
        $(this).hide();
    });
});

//Exercise 2
//1.
$(document).ready(function(){
    $("#e2").after("<div>Welcome</div><br>");
});

//2.
$(document).ready(function(){
    $(".yellow").css("background-color","yellow");
});

//3.
$(document).ready(function(){
    $("#showButton").click(function(){
        $("#dh").show();
    });
    $("#hideButton").click(function(){
        $("#dh").hide();
    });
});

//4.
$(document).ready(function(){
    $("#toggleButton").click(function(){
        $("#t").toggle();
    });
});

//5.
$(document).ready(function(){
    $("#nameButton").click(function(){
        $("#name").text("Jonathan");
    });
});
