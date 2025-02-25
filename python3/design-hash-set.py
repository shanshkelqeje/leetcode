#
# @lc app=leetcode id=705 lang=python3
#
# [705] Design HashSet
#


# @lc code=start
class ListNode:
    def __init__(self, key):
        self.key = key
        self.next = None


class MyHashSet:

    def __init__(self):
        self.set = [ListNode(0) for i in range(10**4)]

    def add(self, key: int) -> None:
        index = key % len(self.set)
        current = self.set[index]

        while current.next:
            if current.next.key == key:
                return
            current = current.next
        current.next = ListNode(key)

    def remove(self, key: int) -> None:
        index = key % len(self.set)
        current = self.set[index]

        while current.next:
            if current.next.key == key:
                current.next = current.next.next
                return
            current = current.next

    def contains(self, key: int) -> bool:
        index = key % len(self.set)
        current = self.set[index]

        while current.next:
            if current.next.key == key:
                return True
            current = current.next
        return False


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)
# @lc code=end

# Linked List
