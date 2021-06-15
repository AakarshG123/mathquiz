player1_name = localStorage.getItem("mathlete1")
player2_name = localStorage.getItem("mathlete2")

mathlete1_score = 0
mathlete2_score = 0

document.getElementById("player_1").innerHTML = player1_name + " : "
document.getElementById("player_2").innerHTML = player2_name + " : "
document.getElementById("mathlete1_score").innerHTML = mathlete1_score
document.getElementById("mathlete2_score").innerHTML = mathlete2_score
document.getElementById("player_question").innerHTML = "Question turn - " + player1_name
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name
function send(){
 number1 = document.getElementById("number1_input").value 
 number2 = document.getElementById("number2_input").value 
 actual_number = parseInt(number1) * parseInt(number2)
 question_number = "<h4>" + number1 + "X" + number2 + "</h4>"
 input_box = "<br>Answer : <input type='text' id='input_check_box'>"
 check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
 row = question_number + input_box + check_button 
 document.getElementById("output").innerHTML = row
 document.getElementById("number1_input").value = ""
 document.getElementById("number2_input").value = ""
}
question_turn = "mathlete1";
answer_turn = "mathlete2";
function check(){
    get_answer = document.getElementById("input_check_box").value
    if (get_answer == actual_number){
        if(answer_turn=="mathlete1"){
            update_player1_score = mathlete1_score + 1
            document.getElementById("mathlete1_score").innerHTML = update_player1_score
        }
        else{
            update_player2_score = mathlete2_score + 1
            document.getElementById("mathlete2_score").innerHTML = update_player2_score
        }} 
        if(question_turn == "mathlete1"){
        question_turn = "mathlete2"
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name
    }
    else {
        question_turn = "mathlete1"
        document.getElementById("player_question").innerHTML = "Question turn - " + player1_name
    }
    if(answer_turn == "mathlete1"){
    answer_turn = "mathlete2"
    document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name
}
 else {
    answer_turn = "mathlete1"
    document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name
}
document.getElementById("output").innerHTML = ""
}

