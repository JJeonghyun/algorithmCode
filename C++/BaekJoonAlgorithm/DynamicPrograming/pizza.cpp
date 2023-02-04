#include <iostream>

using namespace std;

int pizza[11] = { 0, };

int main()
{
	int x;
	cin >> x;

	pizza[1] = 0;
	pizza[2] = 1;

	for (int i = 3; i <= x; i++) {
		int quotient = i / 2;
		pizza[i] = (quotient * (i - quotient)) + pizza[quotient] + pizza[i - quotient];
	}

	cout << pizza[x] << endl;

	return 0;
}