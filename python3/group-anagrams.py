#
# @lc app=leetcode id=49 lang=python3
#
# [49] Group Anagrams
#

# @lc code=start
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result = defaultdict(list) # Key: Frequency count of characters / Value: List of anagrams
        for string in strs:
            count = [0] * 26
            for char in string:
                count[ord(char) - ord('a')] += 1 # ASCII values
            result[tuple(count)].append(string)
        return list(result.values())
                
# @lc code=end

