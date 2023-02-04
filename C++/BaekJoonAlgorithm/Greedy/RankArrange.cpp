#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;


int main() {
	
	int n, a, mmax, cnt;

	cin >> n;
	vector<int> v;

	for (int i = 0; i < n; i++) {
		cin >> a;
		v.push_back(a);
	}

	a = 0, mmax = 0, cnt = 0;

	for (int i = 0; i < n; i++) {
		if (v[i] < a)
			cnt++;
		else {
			mmax = max(mmax, cnt);	
			cnt = 0;	
			a = v[i];	
		}
	}
	mmax = max(mmax, cnt); 

	cout << mmax << endl;
}