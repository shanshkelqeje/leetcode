#
# @lc app=leetcode id=304 lang=python3
#
# [304] Range Sum Query 2D - Immutable
#


# @lc code=start
class NumMatrix:

    def __init__(self, matrix: List[List[int]]):
        ROWS, COLS = len(matrix), len(matrix[0])
        self.sum_matrix = [[0] * (COLS + 1) for col in range(ROWS + 1)]

        for row in range(ROWS):
            prefix = 0
            for col in range(COLS):
                prefix += matrix[row][col]
                above = self.sum_matrix[row][col + 1]
                self.sum_matrix[row + 1][col + 1] = prefix + above

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        row1, col1, row2, col2 = row1 + 1, col1 + 1, row2 + 1, col2 + 1

        lowerRight = self.sum_matrix[row2][col2]
        above = self.sum_matrix[row1 - 1][col2]
        left = self.sum_matrix[row2][col1 - 1]
        upperLeft = self.sum_matrix[row1 - 1][col1 - 1]

        return lowerRight - above - left + upperLeft


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)
# @lc code=end
