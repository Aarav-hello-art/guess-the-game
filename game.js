var p1name = localStorage.getItem("player1")
var p2name = localStorage.getItem("player2")
document.getElementById("p1_name").innerHTML = p1name+" : "
document.getElementById("p2_name").innerHTML = p2name+" : "
p1score = 0
p2score = 0
 document.getElementById("p1score").innerHTML = p1score
 document.getElementById("p2score").innerHTML = p2score

 function send() {
     getword=document.getElementById("wordinput").value
     Qword= getword.toLowerCase()
     console.log(Qword)

     letter1 = Qword.charAt(1) 
     console.log(letter1)
     replace1 = Qword.replace(letter1," _ ")
     console.log(replace1)

     x = Math.floor(Qword.length/2)
    letter2 = Qword.charAt(x)
    console.log(letter2)
    replace2 = replace1.replace(letter2," _ ") 
    console.log(replace2)

    y = Qword.length-1
    letter3 = Qword.charAt(y)
    console.log(letter3)
    finalque = replace2.replace(letter3," _ ")
    console.log(finalque)

    qtag = `<h4>Question: ${finalque}</h4><br>`
    atag = `Answer: <input type="text" id="ansbox"><br><br>`
    btag = `<button onclick="check()" class="btn btn-primary">Check</button>`
     

    document.getElementById("output").innerHTML=qtag+atag+btag 
 }


