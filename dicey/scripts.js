var button = document.getElementById("rollButton");


// Describing what the button will do once clicked


button.onclick = function() {

  if (document.getElementById("LSB").childElementCount == 5) {
    alert("It looks like player 1 has won, click OK to reload and try again!");
    button.innerHTML = ("Reload");
    button.onclick = function() {
      document.location.reload(true);
    }
  } else if (document.getElementById("RSB").childElementCount == 5) {
    alert("It looks like player 2 has won, click OK to reload and try again!");
    button.innerHTML = ("Reload");
    button.onclick = function() {
      document.location.reload(true);
    }
  } else {
    // Two number generators, duplicated as we want TWO numbers generating at the same time, could do this with an array but it means more typing
    var playerOne = Math.floor((Math.random() * 6) + 1);
    var playerTwo = Math.floor((Math.random() * 6) + 1);

    // Explaining that the SVG's for the big dice should change depending on what number we are given by the generators
    document.getElementById("diceOne").src = "graphics/dice-" + playerOne + ".svg";
    document.getElementById("diceTwo").src = "graphics/dice-" + playerTwo + ".svg";


    if (playerOne > playerTwo) {
      winnerAlert("Player one wins!");
      addListItem(document.getElementById("LSB"));
    } else if (playerTwo > playerOne) {
      winnerAlert("Player 2 wins!");
      addListItem(document.getElementById("RSB"));
    } else {
      winnerAlert("It's a draw! Try rolling again!");
    }

    // Delay timer for the alert message (prevents the alert button from preventing the dice updating)
    function winnerAlert(winner) {
      setTimeout(function() {
        alert(winner);
      }, 100);
    }

    // This function appends the list item on the scoreboards, it takes the RSB or LSB as input
    function addListItem(scoreboard) {

      // var that creates the li and two img elements
      var newLi = document.createElement("li");

      // This sets the classes of the new list item. Note the space between the two class names listItem and floatRight
      newLi.setAttribute("class", "listItem floatRight");

      var newImg1 = document.createElement('img');
      newImg1.setAttribute("class", "scoreDice");
      newImg1.setAttribute("src", "graphics/dice-" + playerOne + ".svg");

      var newImg2 = document.createElement('img');
      newImg2.setAttribute("class", "scoreDice");
      newImg2.setAttribute("src", "graphics/dice-" + playerTwo + ".svg");


      // This statement decides the placement of the 'winner' text
      if (playerOne > playerTwo) {
        newLi.setAttribute("class", "listItem floatRight");
        newLi.appendChild(newImg1);
        newLi.appendChild(newImg2);
        scoreboard.appendChild(newLi);
      } else if (playerTwo > playerOne) {
        newLi.setAttribute("class", "listItem floatLeft");
        newLi.appendChild(newImg1);
        newLi.appendChild(newImg2);
        scoreboard.appendChild(newLi);
      } else {
        winnerAlert("It's a draw! Try rolling again!");
      }
    }

  }

}
