main :: IO ()
main = do
    content <- readFile "input.txt"
    writeFile "output.txt" content
