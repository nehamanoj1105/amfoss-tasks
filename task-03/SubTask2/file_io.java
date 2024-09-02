import java.nio.file.*;

public class FileIO 
{
    public static void main(String[] args) 
    {
        try 
        {
            String content = Files.readString(Path.of("input.txt"));
            Files.writeString(Path.of("output.txt"), content);
        } 
        catch (Exception e) 
        {
            e.printStackTrace();
        }
    }
}
