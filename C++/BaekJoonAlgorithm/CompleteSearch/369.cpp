#include <iostream>

using namespace std;

int repeat(int x) {
	if (x < 1) return 0;

	int isTure = 0;
	if (x % 10 == 3 || x % 10 == 6 || x % 10 == 9) isTure = 1;

	return repeat(x / 10) + isTure;
}

int main()
{
	int n, cnt = 0;
	cin >> n;

	for (int i = 1; i <= n; i++) {
		cnt += repeat(i);
	}

	cout << cnt << endl;

	return 0;
}