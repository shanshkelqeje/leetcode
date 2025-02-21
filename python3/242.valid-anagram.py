#
# @lc app=leetcode id=242 lang=python3
#
# [242] Valid Anagram
#

# @lc code=start
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): 
            return False
        
        s_char_dict = dict()
        t_char_dict = dict()

        for i in range(len(s)):
            s_char_dict[s[i]] = s_char_dict.get(s[i], 0) + 1
            t_char_dict[t[i]] = t_char_dict.get(t[i], 0) + 1
        
        return s_char_dict == t_char_dict
                
# @lc code=end

