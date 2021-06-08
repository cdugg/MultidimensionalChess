public class Piece {
    int [] position;
    int dimensions;
    public Piece(int dims, int x, int y, int z, int a, int b){
        position = new int [5];
        position[0] = x;
        position[1] = y;
        position[2] = z;
        position[3] = a;
        position[4] = b;
        dimensions = dims;
    }
    public void move(int dims, int x, int y, int z, int a, int b){
        //implement validation as override in piece classes
        //validates then sets position
    }
    public void setPosition(int x, int y, int z, int a, int b){
        position[0] = x;
        position[1] = y;
        position[2] = z;
        position[3] = a;
        position[4] = b;
    }
    public int[] getPosition(){
        int [] out = new int [dimensions];
        for(int i = 0; i < dimensions; i ++){
            out[i] = position[i];
        }
        return out;
    } 
}
