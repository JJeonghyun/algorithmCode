#include <iostream>
#include <stack>
#include <string>

using namespace std;

stack<char> st;

int main()
{
	int n;
	cin >> n;
	for (int i = 0; i < n; i++) {
		string ans;
		cin >> ans;
		int len = (int)ans.length();
		for (int j = 0; j < len; j++) {
			char c = ans[j];
			if (c == '(') st.push(c);
			else {
				if (st.empty()) return false;
				else {
					st.pop();
				}
			}
		}
		if (st.empty()) cout << "Yes" << "\n";
		else cout << "No" << "\n";
	}
	return 0;
}