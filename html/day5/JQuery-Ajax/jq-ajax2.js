$(function(){
    $('button').click(function(){
       var data1 = $("#x1").val();
       var data2 = $("#x2").val();
       var data3 = $("#x3").val();

       var record = {
        customerId : data1,
        productNo : data2,
        quantity : data3
       }
       console.log(record);
       record = JSON.stringify(record);
       console.log(record);

    //    $.ajax({
    //         type: "post",
    //         data : record,
    //         url : "http://localhost:5000/api/sales/",
    //         contentType: "application/json",
    //         success: function(result){
    //             console.log("success");
    //             console.log(result)
    //         },
    //         error:function(err){
    //             console.log("ERROR");
    //             console.log(err)
    //         }
    //    })       

    $.post({
        data : record,
        url : "http://localhost:5000/api/sales/",
        contentType: "application/json",
        success: function(result){
            console.log("success");
            console.log(result)
        },
        error:function(err){
            console.log("ERROR");
            console.log(err)
        }
   })       
    })
})