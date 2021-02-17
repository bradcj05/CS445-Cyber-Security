#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>

int main(){
	printf("I'm a fake!\n");
	system("/bin/zsh");
	return 0;
}

