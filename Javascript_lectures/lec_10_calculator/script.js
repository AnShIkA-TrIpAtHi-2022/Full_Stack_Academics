// event delegation -> design pattern
//addEventListener applied on common parent instead of child



let container = document.getElementById('container');
let outScreen = document.getElementById('output');

container.addEventListener('click', (e)=>{
    if(e.target.tagName=='BUTTON'){
        let value = Number(e.target.textContent);
    }
})