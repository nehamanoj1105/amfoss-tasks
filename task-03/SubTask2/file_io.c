#include <stdio.h>

int main() {
    FILE *infile, *outfile;
    char content[1000];

    infile = fopen("input.txt", "r");
    outfile = fopen("output.txt", "w");

    if (infile != NULL) 
    { 
        while (fgets(content, sizeof(content), infile) != NULL) 
        {
            fputs(content, outfile);
        }
        fclose(infile);
        fclose(outfile);
    }
    return 0;
}
