import System.IO

main :: IO ()
main = do
    contents <- readFile "input.txt"
    let n = read (head (lines contents)) :: Int
    writeFile "output.txt" (unlines (diamond n))

diamond :: Int -> [String]
diamond n = [replicate (n-i-1) ' ' ++ replicate (2*i+1) '*' | i <- [0..n-1]]
            ++ [replicate (n-i-1) ' ' ++ replicate (2*i+1) '*' | i <- [n-2,n-3..0]]
