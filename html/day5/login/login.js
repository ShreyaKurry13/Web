$(function(){
    $('button').click(function(){
        var email = $("#x1").val();
        var pass = $("#x2").val();
        var regEmail = /^([\w]+)@([\w]+)\.([\w]+)$/;
        var regPass = /^(?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\-\$]).{4,12}$/;

        console.log(email);
        console.log(pass);
        

        if(!regEmail.test(email)){
            // $('p').text('<b>Invalid Email</b>')
            $('p').html('<b>Invalid Email</b>')
        }
        else if(!regPass.test(pass)){
            // $('p').text('<b>Invalid Email</b>')
            $('p').html('<b>Invalid Password</b>')
        }
        else{
            $('p').html('<b>Valid Details</b>')
        }
    })
})