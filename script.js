function validateForm(){
    //menampung data yang ditarik dari html
    let name = document.getElementById("name-data").value
    let email = document.getElementById("email-data").value
    let password = document.getElementById("pass-data").value
    let confirm_password = document.getElementById("confirm-pass-data").value
    let dob = document.getElementById("dob-data").value
    let check = document.getElementById("agreement").checked

    //value = isi dari input bar
    //checked = return Boolen : return or false
    
    //nama >= 6
    if(name.length < 6){
        document.getElementById("error-name").innerHTML = "Name must be at least 6 characters"
    }
    else{
        document.getElementById("error-name").innerHTML = ""
    }

    //email = @gmail.com
    if(!email.endsWith("@gmail.com")){
        document.getElementById("error-email").innerHTML = "Email msut end with @gmail.com"
    }
    else{
        document.getElementById("error-email").innerHTML = ""
    }

    console.log(alphanumeric(password))

    if(!alphanumeric(password)){
        document.getElementById("error-pass").innerHTML = "Password must alphanumeric"
    }
    else{
        document.getElementById("error-pass").innerHTML =""
    }

    if(confirm_password != password){
        document.getElementById("error-confirm-pass").innerHTML = "Confirm pass must be the same as the password"

    }
    else{
        document.getElementById("error-confirm-pass").innerHTML = ""
    }

    //valiidasi dob tidak boleh lebih dari tanggal sekarang
    if(new Date(dob) > new Date()){
        document.getElementById("error-dob").innerHTML="DOB must not exceed the current date"
    }
    else{
        document.getElementById("error-dob").innerHTML=""
    }

    if(!check){
        alert("You must agree to EULA")
    }
    else{
        alert("You have successfully created an account")
    }
}


//isNan = not a number (Alphabet)
function alphanumeric(password){
    let isAlpha = false  //varibel alphabet dan numeric masiih kosong
    let isNumeric = false
    for(let i = 0;i<password.length;i++){       //iterasi per huruf dari password
        if(isNaN(password[i])==true){   //kalau alphabet benar
            isAlpha = true //set jadi true
        }
        else{
            isNumeric = true   
        }
    }

    if(isAlpha == true && isNumeric == true){
        return true
    }
    else{
        return false
    }
}