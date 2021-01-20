#include <stdio.h>
#include <stdlib.h>

int main(int argc, char * argv[], char * envp[]){

	int i = 0, j = 0;
	printf("argc =  %d\n", argc);
  
	for (; i < argc; i++)
		printf("argv[%d] = %s\n", i, argv[i]);
    
	while (envp[j] != NULL) {
		printf("envp[%d] = %s\n", j, envp[j]);
		printf("memory address of envp[%d]: %x\n", j, (unsigned int)envp[j]);  // print out all the environment variables of the process of this C program
		j ++;
	}

	printf("SHELL's value: %s\n", getenv("SHELL"));
	printf("SHELL's address: %x\n", (unsigned int)getenv("SHELL"));  // get SHELL environment variable value and address

}
