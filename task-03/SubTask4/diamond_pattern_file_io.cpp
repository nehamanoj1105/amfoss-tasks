#include <iostream>
#include <fstream>
#include <string>
#include <iomanip>

int main() {
    std::ifstream infile("input.txt");
    int n;
    infile >> n;
    infile.close();

    std::ofstream outfile("output.txt");
    for (int i = 0; i < n; i++) {
        outfile << std::setw(n - i) << "" << std::string(2 * i + 1, '*') << std::endl;
    }
    for (int i = n - 2; i >= 0; i--) {
        outfile << std::setw(n - i) << "" << std::string(2 * i + 1, '*') << std::endl;
    }
    outfile.close();
    return 0;
}
