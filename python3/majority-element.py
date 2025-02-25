#
# @lc app=leetcode id=169 lang=python3
#
# [169] Majority Element
#


# @lc code=start
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = 0
        for num in nums:
            if count == 0:
                result = num
                count += 1
            elif num == result:
                count += 1
            else:
                count -= 1
        return result


# @lc code=end

# Boyer-Moore Voting Algorithm
# Time Complexity: O(n)
# Space Complexity: O(1)
