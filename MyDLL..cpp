#define BUILD_DLL

#include <vcl.h>
#include <windows.h>

#pragma hdrstop
#pragma argsused
#include "UMyDLL.h"

int WINAPI DllEntryPoint(HINSTANCE hinst, unsigned long reason, void* lpReserved)
{
	return 1;
}

int SumOfDigit(int a){
int s = 0;
while(a>0){
s+=a%10;
a/=10;
}
return s;
}

int factorial(int i)
{
  if (i==0) return 1;
  else return i*factorial(i-1);
}

