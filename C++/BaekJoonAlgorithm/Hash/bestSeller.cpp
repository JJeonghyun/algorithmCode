#include <iostream>
#include<map>
#include<string>
#include<vector>
#include<algorithm>

using namespace std;

map<string, int> m;
vector<pair<int, string>> v;


int main()
{
	int n;
	string tmp;
	cin >> n;
	for (int i = 0; i < n; i++)
	{
		cin >> tmp;
		if (m.find(tmp) == m.end())
			m.insert({ tmp,1 });
		else
			m[tmp]++;
	}

	for (auto it = m.begin(); it != m.end(); it++)
		v.push_back({ -it->second, it->first });

	sort(v.begin(), v.end());

	cout << v[0].second << "\n";
	return 0;
}