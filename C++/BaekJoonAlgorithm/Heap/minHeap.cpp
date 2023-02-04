#include <iostream>
#include <queue>
#include <vector>

using namespace std;

int main()
{
	int n;
	//cin >> n;
	scanf("%d", &n);
	priority_queue<int, vector<int>, greater<int>> pq;

	for(int i= 0; i<n ; i++) {
		int input;
		//cin >> input;
		scanf("%d", &input);
		if (input == 0) {
			if (pq.empty()) printf("0\n");
				//cout << "0" << endl; 
			else {
				//cout << pq.top() << endl;
				printf("%d\n", pq.top());
				pq.pop();
			}
		}
		else pq.push(input);
	}
	return 0;
}