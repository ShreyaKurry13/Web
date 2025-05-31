$(function(){
    $('button').click(function(){
        //$.ajax() ,$.get() ,$.post()
        // do with get
        // $.ajax(
        //     {
        //     type: "get",
        //     url: `http://localhost:5000/api/sales/${$('#txt').val()}`,
        //     success:function(result){
        //         console.log("success");
        //         console.log(result);
        //         $('tbody').html("");

        //         $.each(result, function(id, obj){
        //             console.log(obj);
        //             $("tbody").append(`
        //                     <tr>
        //                         <td>${$('#txt').val()}</td>
        //                         <td>${obj.productNo}</td>
        //                         <td>${obj.quantity}</td>
        //                         <td>${obj.orderDate}</td>
        //                     </tr>  
        //                 `)
        //         })
        //     }
        
        //     })
        // })
        $.get(
            {
            url: `http://localhost:5000/api/sales/${$('#txt').val()}`,
            success:function(result){
                console.log("success");
                console.log(result);
                $('tbody').html("");

                $.each(result, function(id, obj){
                    console.log(obj);
                    $("tbody").append(`
                            <tr>
                                <td>${$('#txt').val()}</td>
                                <td>${obj.productNo}</td>
                                <td>${obj.quantity}</td>
                                <td>${obj.orderDate}</td>
                            </tr>  
                        `)
                })
            }
        
            })
        })
    })
