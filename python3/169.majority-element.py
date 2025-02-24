#
# @lc app=leetcode id=169 lang=python3
#
# [169] Majority Element
#


# @lc code=start
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        n = len(nums)
        num_dict = {}
        for i in range(n):
            num_dict[nums[i]] = num_dict.get(nums[i], 0) + 1
            if num_dict.get(nums[i]) > math.floor(n / 2):
                return nums[i]


# @lc code=end

# Time Complexity: O(n)
# Space Complexity: O(n)
