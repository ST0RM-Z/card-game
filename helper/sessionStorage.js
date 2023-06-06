
//handler for save settings button. save name and number of cards to session storage
const button_click = () => { 

  player_name = $("#player_name").val();
  totalcards = $("#num_cards").val();

  sessionStorage.setItem("player_name",player_name);
  sessionStorage.setItem("totalcards",totalcards);

  location.reload(true);
}

//retrieves and displays storage data
const load_player = () =>  {

  player_name = sessionStorage.getItem("player_name");
  if(player_name){
      $("#player").text(" Player: "+player_name);

      if(localStorage.getItem(player_name)){
          $("#high_score").text(" Score: "+localStorage.getItem(player_name));
      }

  }

  totalcards = (sessionStorage.getItem("totalcards"))?sessionStorage.getItem("totalcards"):totalcards;       
      
  
}