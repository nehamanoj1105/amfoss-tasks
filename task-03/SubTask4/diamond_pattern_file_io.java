import java.nio.file.*;
import java.io.IOException;
import java.util.stream.IntStream;

public class DiamondPattern 
{
    public static void main(String[] args) 
    {
        try 
        {
            int n = Integer.parseInt(Files.readString(Path.of("input.txt")).trim());

            StringBuilder output = new StringBuilder();
            IntStream.range(0, n).forEach(i -> {
                output.append(" ".repeat(n - i - 1))
                      .append("*".repeat(2 * i + 1))
                      .append("\n");
            });
            IntStream.range(0, n - 1).map(i -> n - i - 2).forEach(i -> {
                output.append(" ".repeat(n - i - 1))
                      .append("*".repeat(2 * i + 1))
                      .append("\n");
            });

            Files.writeString(Path.of("output.txt"), output.toString());
        } 
        catch (IOException e)
        {
            e.printStackTrace();
        }
    }
}
