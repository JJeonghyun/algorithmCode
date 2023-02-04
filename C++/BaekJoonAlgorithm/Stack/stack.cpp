#include <iostream>
#include <string>
#include <stack>

using namespace std;
stack<int> s;

int main()
{
	int n;
	cin >> n;
	for (int i = 0; i < n; i++) {
		string ans;
		cin >> ans;
		if (ans == "push") {
			int x;
			cin >> x;
			s.push(x);
		}
		else if (ans == "top") {
			if (s.empty()) cout << "-1" << "\n";
			else cout << s.top() << "\n";
		}
		else if (ans == "pop") {
			if (s.empty()) cout << "-1" << "\n";
			else {
				cout << s.top() << "\n";
				s.pop();
			}
		}
		else if (ans == "empty") {
			cout << s.empty() << "\n";
		}
		else {
			cout << s.size() << "\n";
		}
	}
	return 0;
}