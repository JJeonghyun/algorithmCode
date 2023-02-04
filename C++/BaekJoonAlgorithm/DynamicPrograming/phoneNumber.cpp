#include <iostream>
#include <string>

using namespace std;

int main() {
	string phone_num1, phone_num2, add_num, res_num;

	cin >> phone_num1;
	cin >> phone_num2;

	for (unsigned int i = 0; i < phone_num1.size(); i++) {
		add_num = add_num + phone_num1[i] + phone_num2[i];
	}

	while (add_num.size() != 2) {
		for (unsigned int i = 0; i < add_num.size()-1; i++) {
			res_num = res_num + char('0' + ((add_num[i] - '0') + (add_num[i + 1] - '0')) % 10);
		}
		add_num = res_num;
		res_num.clear();
	}

	cout << add_num;
	return 0;
}

/*
#include <iostream>
#include <vector>

using namespace std;

int main()
{
	int x, y, sum1, sum2;
	cin >> x >> y;

	vector<int> tel_num1;
	vector<int> tel_num2;

	tel_num1.push_back(x);
	tel_num2.push_back(y);

	for (int i = 0; i < tel_num1.size(); i++) {
		sum1 = tel_num1[i] + tel_num2[i];
		sum2 = tel_num2[i] + tel_num1[i + 1];
		if (sum1, sum2 > 10) {
			sum1 = sum1 % 10;
			sum2 = sum2 % 10;
		}
		tel_num1.push_back(sum1);
		tel_num2.push_back(sum2);
	}
	cout << tel_num1.begin() << tel_num2.begin() << endl;


}
*/