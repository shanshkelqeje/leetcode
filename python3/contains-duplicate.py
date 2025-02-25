#
# @lc app=leetcode id=217 lang=python3
#
# [217] Contains Duplicate
#

# @lc code=start
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        distinct_nums = set()
        for num in nums:
            if num in distinct_nums: return True
            else: distinct_nums.add(num)
        return False
        
# @lc code=end

