
$(document).ready(function() {
    /*
    $("input").on("blur", function() {

        var inputLength = $("input").val().length;
        var num = 0;

        for(var i =0; i< inputLength; i++) {
            if( $("input").val().charCodeAt(i) >= 48 &&  $("input").val().charCodeAt(i) <=57 ) {
                num++;
            }
        }

        if(num==inputLength) {
            $("div").html("Done");
        } else {
            $("div").html("fail");
        }

    })
    */
   function checkName () {
    if($("#name").val()=="") {
            $(".name span").fadeIn().siblings().css("margin-bottom", "10px");
        } else {
            $(".name span").fadeOut().siblings().css("margin-bottom", "10px");
            return true;
        }
    }

    function checkPhone() {
        var inputLength = $("#phone").val().length;
            var num = 0;
    
            for(var i =0; i< inputLength; i++) {
                if( $("#phone").val().charCodeAt(i) >= 48 &&  $("#phone").val().charCodeAt(i) <=57 ) {
                    num++;
                }
            }
    
            if(num==inputLength) {
                $(".phone span").fadeOut().siblings().css("margin-bottom", "10px");
                return true;
            } else {
                $(".phone span").fadeIn().siblings().css("margin-bottom", "10px");
            }
    }

    function checkEmail() {
        var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            email = $("#email").val();
            if(pattern.test(email) && email !== '') {
                $(".email span").fadeOut().siblings().css("margin-bottom", "10px");
                return true;
                
            } else {
                $(".email span").fadeIn().siblings().css("margin-bottom", "10px");
                
            }
    }

    function checkTextArea() {
        if($("#t_area").val()=="") {
            $(".t_area span").fadeIn().siblings().css("margin-bottom", "10px");
        } else {
            $(".t_area span").fadeOut().siblings().css("margin-bottom", "10px");
            return true;
        }
    }

    $("#submit").on("click", function(e) {

        if(checkName()==true && checkPhone()==true && checkTextArea()==true && checkEmail() == true) {
            alert("Successful Registiration ! :D");
        } else {
            e.preventDefault();
            checkName();
            checkPhone();
            checkEmail();
            checkTextArea();
        }
    })

    

})






