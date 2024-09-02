package main

import (
    "fmt"
    "io/ioutil"
    "strings"
)

func main() {
    content, _ := ioutil.ReadFile("input.txt")
    var n int
    fmt.Sscanf(string(content), "%d", &n)

    var output strings.Builder
    for i := 0; i < n; i++ {
        output.WriteString(strings.Repeat(" ", n-i-1))
        output.WriteString(strings.Repeat("*", 2*i+1))
        output.WriteString("\n")
    }
    for i := n - 2; i >= 0; i-- {
        output.WriteString(strings.Repeat(" ", n-i-1))
        output.WriteString(strings.Repeat("*", 2*i+1))
        output.WriteString("\n")
    }

    ioutil.WriteFile("output.txt", []byte(output.String()), 0644)
}
