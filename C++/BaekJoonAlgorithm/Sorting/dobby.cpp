#include <iostream>
#include <algorithm>
#include <vector>
#include <string>

using namespace std;

int main()
{	
	while (1) {
		int n;
		cin >> n;
		if (n == 0) return 0;
		vector<pair<string, string>> word;  

		string st;
		for (int i = 0; i < n; i++) {
			cin >> st;
			string ori = st;
			for (int i = 0; i < st.size(); i++) {
				if (st[i] >= 'A' && st[i] <= 'Z') {
					st[i] = st[i] - 'A' + 'a';
				}
			}
			word.push_back(make_pair(st, ori));
		}

		sort(word.begin(), word.end());
		cout << word.front().second << endl;
	}
}