
// calling the functions
cal();
orderDonut (); 



// declaring the functions

function cal (){
    
    var ans = prompt("how much is 10 * 20")

    if (ans == 200) {
        console.log(ans + ": right answer!")
        confirm("good job, right answer!");
        document.write("good job, right answer!")

    } else {
        console.log(ans + ": wrong answer!")
        confirm("sorry, wrong answer!");
        document.write("sorry, wrong answer!")
        alert("try again!!")
    }
}

function orderDonut (){

    var donutNum = Number(prompt("how much Donuts do you order?"));

    while(isNaN(donutNum)){
        document.write("Enter a valid Number!!");
        console.log("NOT A VALID NUMBER");
        var donutNum = Number(prompt(donutNum + " NOT A VALID NUMBER "+" Please Enter a valid Number!!, how much Donuts do you order?"));
    }
    
    for(var i =0; i< donutNum; i++){
        document.write("<img src = https://media.istockphoto.com/photos/donut-with-sprinkles-isolated-picture-id538335769?k=6&m=538335769&s=612x612&w=0&h=3tWMzxWCN99V21CcbUny2TQBsYklc1es3gARr4add7s=>");
    }
}