public class Queen extends Piece{
    public Queen(int dims, int x, int y, int z, int a, int b) {
        super(dims, x, y, z, a, b);
    }
    @Override
    public void move(int dims, int x, int y, int z, int a, int b){
        //validate
        super.setPosition(x, y, z, a, b);
    }
}
