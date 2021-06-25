let chess= [
    [0,0,0,0,2,2,2,2],
    [0,0,0,0,2,2,2,2],
    [0,0,0,0,2,2,2,2],
    [0,0,0,0,2,2,2,2],
    [1,1,1,1,0,0,0,0],
    [1,1,1,1,0,0,0,0],
    [1,1,1,1,0,0,0,0],
    [1,1,1,1,0,0,0,0]
]

let board = $('#field')
let position = []

function draw_board(){
    board.html("");
    for (let y = 0; y < chess.length; y++){
        for(let x=0; x< chess[0].length; x++){
                chess_value = chess[y][x];
                if (x % 2 == y % 2)
                    board.append(`<div class="block white" x="${x}" y="${y}"><div class="figure figure-${chess_value}"></div></div>`);
                else
                    board.append(`<div class="block black" x="${x}" y="${y}"><div class="figure figure-${chess_value}"></div></div>`);

        }
    }
                //left
    function check(x,y,old_x,old_y){ 
        if (y == old_y){
            if (old_x > x){
                for(let i=old_x-1; i > x-1; i--){                    
                    if(chess[y][i] > 0){
                        return false;
                    }
                }
                // right
            }else{
                for(let i=+old_x+1; +i <= +x; i++){                                                        
                    if(chess[y][i] > 0){
                        return false;
                    }
                }

            }
                //up
        }else{ 
            if (old_y > y){
                for(let i=old_y-1; i > y-1; i--){                    
                    if(chess[i][x] > 0){
                        return false;
                    }
                }
                //down
            }else{
                for(let i=+old_y+1; +i < +y+1; i++){                    
                    if(chess[i][x] > 0){
                        return false;
                    }
                }

            }

        }
        return true
    
    }
    $(".block").click(function(e){
            let x = $(this).attr("x");
            let y = $(this).attr("y");
            console.log()
            let old_x = position[0];
            let old_y = position[1];

            if (position.length>0 && (old_x == x || old_y == y) && check(x, y, old_x, old_y) ){   
                let select_fig = chess[old_y][old_x];
                chess[old_y][old_x] = 0;
                chess[y][x] = select_fig;
                position = []; 
                draw_board();
            }else if(chess[y][x] != 0){
                position[0] = x;
                position[1] = y;
            }else{
                position = [];
            }
            
    });
}



draw_board()
