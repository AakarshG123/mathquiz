function login(){
    mathlete_1 = document.getElementById("input1").value
    mathlete_2 = document.getElementById("input2").value
    localStorage.setItem("mathlete1", mathlete_1)
    localStorage.setItem("mathlete2", mathlete_2)  
    window.location.replace("quiz_game_page.html")
}