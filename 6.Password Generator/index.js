const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

document.getElementById("password-btn").addEventListener("click", function newPassword(){
    let password = "";
    let lengthEl = document.getElementById("length-el");
    let lengthPass = lengthEl.value;

    for(let i = 0; i < lengthPass; i++) {
        const randomPass = characters[Math.floor(Math.random()*characters.length)];
        password += randomPass;
    }

    let passOne = document.getElementById("password-one");
    passOne.textContent = password;
})

// need to add alert when length input is empty //