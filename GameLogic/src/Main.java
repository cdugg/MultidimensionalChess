import java.util.Arrays;

public class Main {
    public static void main(String [] args){
        System.out.println("Hello");
        Piece king = new King(2, 1, 1, -1, -1, -1);
        System.out.println(Arrays.toString(king.getPosition()));
        king.move(2, 2, 2, -1, -1, -1);
        System.out.println(Arrays.toString(king.getPosition()));
    }
}
