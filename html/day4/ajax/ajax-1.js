// Event Handling

document.getElementById('btn').onclick = function(){
    const API = 'https://restcountries.com/v3.1/all';
    var xhr = new XMLHttpRequest();
    console.log(xhr);
    console.log(xhr.readyState ,xhr.status); //0 | 0
    
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState , xhr.status);
        if(xhr.readyState == 4 && xhr.status==200){
            console.log(xhr.responseText);
            var result = JSON.parse(xhr.responseText);
            console.log(result);

            document.querySelector('.row').innerHTML='';

            result && result.length>0 &&  result.forEach(function(obj){
                // console.log(obj);
                // console.log(obj.flags.png , obj.name.common);

                var divTag = document.createElement('div');
                console.log(divTag);
                
                divTag.className = 'col-xl-3 text-center';

                var imgTag = document.createElement('img');
                pTag = document.createElement('p');
                imgTag.className = 'img-fluid';
                
                
                if(obj.name.common != 'Nepal' && obj.name.common != 'Pakistan'){
                    imgTag.src = obj.flags.png;
                    pTag.innerText = obj.name.common;
                    divTag.append(imgTag,pTag);
                    document.querySelector('.row').append(divTag)
                }
            });
        } 
    }
    xhr.open('get',API);
    //1 - readyState - Request has been setup with apis
    xhr.send();
}