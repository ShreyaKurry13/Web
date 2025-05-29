

console.log(typeof document);
console.log(document);
console.log(document.getElementById('btn11'));
console.log(document.getElementById('btn'));

document.getElementById('btn').onclick = function(){
    // alert();
    // console.log(document.querySelector('h1'));
    // console.log(document.querySelector('p'));

    document.querySelector('h1').style.background='#456';
    document.querySelector('h1').style.textAlign='center';

    document.querySelector('h1').innerHTML='<u> test </u>';
    document.querySelector('h1').innerText='<u> test </u>';
    document.querySelector('h1').remove();

}