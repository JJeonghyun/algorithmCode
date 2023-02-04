#include <iostream>

using namespace std;

int main()
{
	int T;
	int minT1, minT2, minT3 = 0;

	cin >> T;

	minT1 = T / 300;
	T %= 300;

	minT2 = T / 60;
	T %= 60;
	
	minT3 = T / 10;
	
	if (T % 10 != 0) {
		cout << "-1" << endl;
		return 0;
	}
	cout << minT1 << ' ' << minT2 << ' ' << minT3 << endl;
}