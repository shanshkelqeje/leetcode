#
# @lc app=leetcode id=912 lang=python3
#
# [912] Sort an Array
#


# @lc code=start
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        def merge_sort(list):
            n = len(list)
            # Base case: A list of 0 or 1 number is already sorted
            if n <= 1:
                return list

            # Recursive case: Divide the list into two equal-sized sublists
            left = []
            right = []
            for i in range(n):
                if i < n // 2:
                    left.append(list[i])
                else:
                    right.append(list[i])

            # Recursively sort both sublists
            left = merge_sort(left)
            right = merge_sort(right)

            # Merge the sorted sublists
            return merge(left, right)

        def merge(left, right):
            result = []

            while left != [] and right != []:
                if left[0] <= right[0]:
                    result.append(left[0])
                    left.pop(0)
                else:
                    result.append(right[0])
                    right.pop(0)
            while left != []:
                result.append(left[0])
                left.pop(0)
            while right != []:
                result.append(right[0])
                right.pop(0)
            return result

        result = merge_sort(nums)
        return result


# @lc code=end
