"use strict";


// this function is used for shuffling the images in the array 
function shuffle_array(array) 
{      
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));           
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
}


//gennerating array by total cards used
const generate_array = () => {   
    let img_array = []
    for(let i = 0;i<totalcards;i++){
        img_array[i] = (i %(totalcards/2))+1; 
    }
    img_array = shuffle_array(img_array);
    return img_array;
}

//displaying number of cards
const render_cards = (arrayshuffled) =>{ 
    let num_row = totalcards/8 ;
    let index_val = 0;
    for (let i = 0; i<num_row; i++){
        let row_card = "<div>";
        for(let j = 0;j<8;j++){
            row_card += "<a id ='images/card_"+arrayshuffled[index_val]+".png' href='#'><img src='images/back.png' alt=''></a>" ;
            index_val++;
        }
        row_card += "</div>";
        $("#cards").append(row_card);
    }   
    
}