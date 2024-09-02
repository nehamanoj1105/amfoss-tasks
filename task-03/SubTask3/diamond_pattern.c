#include <stdio.h>

int main() 
{
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++) 
    {
        printf("%*s", n - i - 1, "");
        for (int j = 0; j < 2 * i + 1; j++) 
        {
            printf("*");
        }
        printf("\n");
    }
    for (int i = n - 2; i >= 0; i--) 
    {
        printf("%*s", n - i - 1, "");
        for (int j = 0; j < 2 * i + 1; j++) 
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
