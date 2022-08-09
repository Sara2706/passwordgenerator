const input = document.getElementById("input");
const copy = document.getElementById("copy");
const length = document.getElementById("length");
const cap = document.getElementById("cap");
const low = document.getElementById("low");
const num = document.getElementById("num");
const sym = document.getElementById("sym");
const genarate = document.getElementById("genarate");

const capital = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lower = "qwertyuioplkjhgfdsazxcvbnm";
const number = "1234567890";
const symbol = "!@#$%^&*()_+?>"

;


function getCapital(){
    return capital[Math.floor(Math.random()*capital.length)];
}

function getLower(){
    return lower[Math.floor(Math.random()*lower.length)];
}

function getNumber(){
    return number[Math.floor(Math.random()*number.length)];
}

function getSymbol(){
    return symbol[Math.floor(Math.random()*symbol.length)];
}

genarate.addEventListener("click",()=>{
    let lengthEl = length.value;
    let password = "";
    for (let i = 0; i < lengthEl ; i++) {
        const pass = passwordGenarate();
        password += pass;
        if (password == 'undefined') {
            password = "";
        }
    }
    input.value = password;

})

copy.addEventListener("click",()=>{
    input.select();
    document.execCommand("copy");
 })

function passwordGenarate(){
    const alt = [];
    if (cap.checked) {
        alt.push(getCapital());
    }
    if (low.checked) {
        alt.push(getLower());
    }
    if (sym.checked) {
        alt.push(getSymbol());;
    }
    if (num.checked) {
        alt.push(getNumber());
    }
    return alt[Math.floor(Math.random()*alt.length)];
}