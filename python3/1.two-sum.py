#
# @lc app=leetcode id=1 lang=python3
#
# [1] Two Sum
#

# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_dict = {}

        for i in range(len(nums)):
            difference = target - nums[i]
            if difference in num_dict:
                return [num_dict.get(difference), i]
            num_dict[nums[i]] = i
# @lc code=end

