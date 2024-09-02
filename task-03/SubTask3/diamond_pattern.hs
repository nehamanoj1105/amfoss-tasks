main :: IO ()
main = do
    putStrLn "Enter a number: "
    n <- readLn
    mapM_ putStrLn (diamond n)

diamond :: Int -> [String]
diamond n = [replicate (n-i-1) ' ' ++ replicate (2*i+1) '*' | i <- [0..n-1]]
            ++ [replicate (n-i-1) ' ' ++ replicate (2*i+1) '*' | i <- [n-2,n-3..0]]
