#
# @lc app=leetcode id=303 lang=python3
#
# [303] Range Sum Query - Immutable
#


# @lc code=start
class NumArray:

    def __init__(self, nums: List[int]):
        self.prefix = []
        sum = 0
        for num in nums:
            sum += num
            self.prefix.append(sum)

    def sumRange(self, left: int, right: int) -> int:
        rightSum = self.prefix[right]
        leftSum = self.prefix[left - 1] if left > 0 else 0
        return rightSum - leftSum


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
# @lc code=end
