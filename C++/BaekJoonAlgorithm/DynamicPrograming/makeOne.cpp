#include <iostream>
#include <algorithm>

using namespace std;

int make_one[1000001];

int main()
{
	int x;
	cin >> x;

	for (int i = 2; i <= x; i++) {
		make_one[i] = make_one[i - 1] + 1;

		if (i % 2 == 0) {
			make_one[i] = min(make_one[i], make_one[i / 2] + 1);
		}
		if (i % 3 == 0) {
			make_one[i] = min(make_one[i], make_one[i / 3] + 1);
		}
	}
	cout << make_one[x] << endl;
	return 0;

}