//starts game and sets variables

// disables click event for cards
const disable_Click = function () {
  $("#cards a").off("click");
};

// call functions onload
$(document).ready(function () {
  $("#tabs").tabs();

  load_player();
  initiateimages();

  $("#save_settings").click(button_click);

  let arrayshuffled = generate_array();

  render_cards(arrayshuffled);
  enable_Click();
});
