#include <iostream>
#include<map>
#include<string>

using namespace std;

int main()
{
	map<string, bool> map;
	int n;
	cin >> n;
	for (int i = 0; i < n; i++) {
		string a, b;
		cin >> a >> b;
		if (b == "enter") {
			map[a] = true;
		}
		else {
			map[a] = false;
		}
	}

	for (auto iter = map.rbegin(); iter != map.rend(); iter++) {
		if (iter->second == true) {
			cout << iter->first << "\n";
		}
	}
}