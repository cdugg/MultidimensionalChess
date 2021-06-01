main(7);
function main(dimensions, version){
    board_init(dimensions, version);
};

function board_init(dimensions, version){
    if(dimensions == 2){
        console.log("Classic 2D");
        var max = [8,8];
        var min = [1,1];
        basic_pieces_init(dimensions, max, min);
    }
    else if(dimensions == 3){
        if(version === "C"){
            console.log("Classic 3D");
            DC3_pieces_init();
        }
        else if(version == "T"){
            console.log("BOO noone likes tournament 3D. You stink");
            T3D_pieces_init();
        }
        else{
            console.log("4x4x4 3D");
            D3_pieces_init();
        }
    }
    else if(dimensions == 4){
        if(version === "C"){
            console.log("8x8x8x8 4D");
            var max = [8,8,8,8];
            var min = [1,1,1,1];
        }
        else{
            console.log("4x4x4x4 4D");
            D4_pieces_init();
        }
    }
    else{
        console.log("8x8... " + dimensions + "D");
        var max = new Array(dimensions).fill(8);
        var min = new Array(dimensions).fill(1);
        basic_pieces_init(dimensions, max, min);
    }
};
//2D, 4DC, 5D+
function basic_pieces_init(dimensions, max, min){
    console.log("Basic piece placements. White and black start at opposite ends of highest dimension.");
};
//3DC, 3D(4x4x4), 4D(4x4x4x4)
function DC3_pieces_init(){
    var max = [8,8,8];
    var min = [1,1,1];
    console.log("3D classic. 8x8x8 board with pieces on 1,1,1-8,1,1 and pawns on 1-2-2, 8-2-2, mirrored by black");
};
function D3_pieces_init(){
    var max = [4,4,4];
    var min = [1,1,1];
    console.log("3D with 4x4 boards. Normal piece set. Special placements. Pawn rows on 1-2-1 to 4-2-1 and 1-2-2 to 4-2-2, queen at 2-1-1, king at 3-1-1, rooks at 1/4-1-1, knights at 1/4-1-2, bishops at 2/3-1-2. mirrored by black.");
};
function D4_pieces_init(){
    var max = [4,4,4,4];
    var min = [1,1,1,1];
    console.log("4D with 4x4 boards. Able to be visualized. Uses special piece set and placements.");
};
function T3D_pieces_init(){
    console.log("how the fuck?");
};