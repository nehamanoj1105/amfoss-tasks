#include <stdio.h>

int main() {
    FILE *infile, *outfile;
    int n;

    infile = fopen("input.txt", "r");
    fscanf(infile, "%d", &n);
    fclose(infile);

    outfile = fopen("output.txt", "w");
    for (int i = 0; i < n; i++) {
        fprintf(outfile, "%*s", n - i - 1, "");
        for (int j = 0; j < 2 * i + 1; j++) 
        {
            fprintf(outfile, "*");
        }
        fprintf(outfile, "\n");
    }
    for (int i = n - 2; i >= 0; i--) 
    {
        fprintf(outfile, "%*s", n - i - 1, "");
        for (int j = 0; j < 2 * i + 1; j++) 
        {
            fprintf(outfile, "*");
        }
        fprintf(outfile, "\n");
    }
    fclose(outfile);
    return 0;
}
