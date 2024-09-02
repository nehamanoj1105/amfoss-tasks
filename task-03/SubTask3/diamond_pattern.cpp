#include <iostream>
#include <iomanip>

int main() {
    int n;
    std::cout << "Enter a number: ";
    std::cin >> n;

    for (int i = 0; i < n; i++) {
        std::cout << std::setw(n - i) << "";
        for (int j = 0; j < 2 * i + 1; j++) {
            std::cout << "*";
        }
        std::cout << std::endl;
    }
    for (int i = n - 2; i >= 0; i--) {
        std::cout << std::setw(n - i) << "";
        for (int j = 0; j < 2 * i + 1; j++) {
            std::cout << "*";
        }
        std::cout << std::endl;
    }
    return 0;
}
