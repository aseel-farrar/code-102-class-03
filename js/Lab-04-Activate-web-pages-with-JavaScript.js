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