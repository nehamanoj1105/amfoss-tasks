use std::fs;
use std::io;

fn main() {
    let input = fs::read_to_string("input.txt").expect("Unable to read file");
    let n: usize = input.trim().parse().expect("Please type a number!");

    let mut output = String::new();

    for i in 0..n 
    {
        output.push_str(&" ".repeat(n - i - 1));
        output.push_str(&"*".repeat(2 * i + 1));
        output.push('\n');
    }
    for i in (0..n-1).rev() 
    {
        output.push_str(&" ".repeat(n - i - 1));
        output.push_str(&"*".repeat(2 * i + 1));
        output.push('\n');
    }

    fs::write("output.txt", output).expect("Unable to write file");
}
