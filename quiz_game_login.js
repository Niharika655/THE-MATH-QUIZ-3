function addUser(){
    player1_name = document.getElementById("player1nameinput").value;
    player2_name = document.getElementById("player2nameinput").value;
    localStorage.setItem("player1nameinput", player1_name);
    localStorage.setItem("player2nameinput", player2_name);
    window.location = "quiz_game_page.html";
}