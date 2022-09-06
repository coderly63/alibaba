class Solution {
public:
    /**
     * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
     *
     * 最大数
     * @param nums int整型vector 无序、非负、整数数组
     * @return string字符串
     */
    string largestNumber(vector<int>& nums) {
        // write code here
        vector<string> vt;
        for (int v: nums) {
            vt.push_back(to_string(v))
        }
        sort(vt.begin(), vt.end(), [](string s1, string s2) {
          string left = s1, right = s2
          return (left += right) > (s2 += s1)
        })
        string ans
        for (auto s: vt) {
          ans += s
        }
        return ans[0] == "0" ? "0" : ans
    }
};