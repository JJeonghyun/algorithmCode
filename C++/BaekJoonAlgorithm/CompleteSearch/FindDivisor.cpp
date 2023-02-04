#include <iostream>
#include <algorithm>

using namespace std;

int main() {
	int n, m;
	int share = 0;
	cin >> n >> m;

	for (int i = 1; i <=n; i++) {
		if (n%i == 0) {
			m--;
			if (m == 0) share = i;
		}
	}
	cout << share << endl;

	return 0;
}


/*
#include <iostream>
#include <algorithm>
#include <queue>

using namespace std;
queue<pair<int, int>> Qshare;

int main()
{
	int n, m;
	int x = 1 ;
	cin >> n >> m;

	for (int i = 1; i <= n; i++) {
		if (n % i == 0) {
			Qshare.push(make_pair(i,x));
			x++;
		 }
	}
	for (int j = 0; j < m-1 ; j++) Qshare.pop();
		
	if (Qshare.size() < m) cout << "0" << endl;
	cout << Qshare.front().first << endl;
	
	return 0;
}
*/