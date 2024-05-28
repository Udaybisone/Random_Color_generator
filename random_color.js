let hexcode = document.getElementById("color-code");
const getColor = ()=>{
    const randomNum = Math.floor(Math.random()*16777215);
    const randomCode = "#" + randomNum.toString(16);
    hexcode.innerHTML = randomCode;
    document.body.style.backgroundColor = randomCode;
    navigator.clipboard.writeText(randomCode);
}

let btn = document.getElementById("btn");

btn.addEventListener("click",getColor);

getColor();


