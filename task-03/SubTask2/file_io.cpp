#include <fstream>
#include <string>

int main() {
    std::ifstream infile("input.txt");
    std::ofstream outfile("output.txt");
    std::string content;

    if (infile && outfile) {
        while (std::getline(infile, content)) {
            outfile << content << std::endl;
        }
    }
    return 0;
}
