#include <iostream>

using namespace std;
//long long arr[117] = { 0,1,1,1 };

long long arr[117];

int main()
{
	int n;
	cin >> n;

	arr[0] = 0;
	arr[1] = 1;
	arr[2] = 1;
	arr[3] = 1;

	// arr[0] = 0;
	// arr[1], arr[2],arr[3] =1;

	for (int i = 3; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 3];
	}
	cout << arr[n];

	return 0;
}