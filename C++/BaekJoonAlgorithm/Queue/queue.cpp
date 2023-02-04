#include <iostream>
#include <queue>
#include <string>

using namespace std;

int main()
{
	/*ios::sync_with_stdio(false);
	cin.tie(nullptr);*/
	int n;
	cin >> n;
	queue<int> qu;

	for (int i = 0; i < n; i++) {
		string input;
		cin >> input;

		if (input == "push") {
			int x;
			cin >> x;
			qu.push(x);
		}
		else if (input == "pop") {
			if (qu.empty()) cout << "-1" << endl;
			else {
				cout << qu.front() << endl;
				qu.pop();
			}
		}
		else if (input == "size") 
			cout << qu.size() << endl;
		else if (input == "empty") {
			if (qu.size() == 0) cout << "1" << endl;
			else cout << "0" << endl;
		}
		else if (input == "front") {
			if (qu.empty()) cout << "-1" << endl;
			else cout << qu.front() << endl;
		}
		else if(input == "back") {
			if (qu.empty()) cout << "-1" << endl;
			else cout << qu.back() << endl;
		}
	}
	return 0;
}