#include <iostream>
#include <queue>

using namespace std;

int main()
{
	queue<int> q;
	queue<int> q1;
	int n, drop, swap;
	cin >> n;
	for (int i = 1; i <= n; i++) {
		q.push(i);
	}
	while (q.size() != 1) {
		drop = q.front();
		q.pop();
		q1.push(drop);
		swap = q.front();
		q.pop();
		q.push(swap);
	}
	while (!q1.empty()) {
		cout << q1.front() << " ";
		q1.pop();
	}
	cout << q.front() << endl;

	return 0;
}