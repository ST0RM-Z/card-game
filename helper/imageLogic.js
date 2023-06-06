//declaration 
let player_name = "";
let imagesArray = [];
let cardsArray = [];
let openedcardarray = [];
let totalcards = 48;
let openedcardstot = 0;
let score = 0;
let attempt = 0;
let playerScore = 0;
let startGame = false;
let endGame = false;
//this function enables Clicking of cards
const enable_Click = function () {
  $("#cards a").on("click", clickcard);
};
const init = function () {
  var css = $("header").find("p .hide").length;

 

  if ($(".hide").size == 1) {
    startGame = true;
    endGame = false;
    openedcardstot = 0;
    attempt = 0;
    playerScore = 0;
    console.log("if");
  }

  //sets game to ended and saves player score to local storage and displays the same
  else if ($(".hide").size == totalcards) {
    endGame = true;
    startGame = false;
    console.log("else-if");

    playerScore = parseFloat(((openedcardstot / attempt) * 100).toFixed(2));
    // console.log(playerScore);

    localStorage[player_name] = playerScore;
    console.log(playerScore);
    console.log("else");

    load_player();
    if (playerScore) {
      $("#correct").text(" Correct: " + playerScore);
    }
  }
};
//it helps to prevent double clicking
const clickcard = () => {
  disable_Click();
  setTimeout(() => {
    enable_Click();
  }, 250);
  if ($(event.target).attr("src") == "images/back.png") {
    openedcardstot++;
    init();
    if (openedcardstot <= 2) {
      let image_Src = $(event.target).parent().attr("id");
      let image_Clicked = $(event.target);
      image_Clicked
        .fadeOut(250, function () {
          image_Clicked.attr("src", image_Src);
          if (openedcardstot === 2) {
            attempt++;
            disable_Click();
            let source1 = openedcardarray[0].attr("src");
            let source2 = openedcardarray[1].attr("src");
            if (source1 == source2) {
              score += 2;
              $("#high_score").text("Score: " + score);

              openedcardarray[0].delay(750).slideUp({
                duration: 250,
                start: () => {
                  openedcardarray[1].delay(750).slideUp({
                    duration: 250,
                    queue: false,
                    complete: function () {
                      openedcardarray[1].addClass("hide");
                      openedcardarray[1].show();
                    },
                  });
                },
                complete: () => {
                  openedcardarray[0].addClass("hide");
                  openedcardarray[0].show();
                  openedcardarray.length = 0;
                  init();
                  enable_Click();
                },
              });
            } else {
              openedcardarray[0]
                .delay(2000)
                .fadeOut({
                  duration: 250,
                  complete: () => {
                    openedcardarray[0].attr("src", "images/back.png");
                    openedcardarray[1].show();
                    openedcardarray.length = 0; //makes array value to zero
                    enable_Click(); //enable clicking of cards
                    init();
                  },
                  start: () => {
                    openedcardarray[1]
                      .delay(2000)
                      .fadeOut({
                        duration: 250,
                        queue: false,
                        complete: () => {
                          openedcardarray[1].attr("src", "images/back.png");
                          openedcardarray[1].show();
                        },
                      })
                      .fadeIn(250);
                  },
                })
                .fadeIn(250);
            }

            openedcardstot = 0; //reseting of cards
          }
        })
        .fadeIn(250);

      openedcardarray[openedcardarray.length] = image_Clicked;
    }
  }
};
