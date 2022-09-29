class Solution:
    '''
    Checks if the number is ugly (contains only 2, 3 and 5 in its prime factors)
    '''
    def isUgly(self, n: int) -> bool:
        if n <= 0:
            return False
        
        while n > 1:
            was_divided = False
            if n % 2 == 0:
                n = n // 2
                was_divided = True
            if n % 3 == 0:
                n = n // 3
                was_divided = True
            if n % 5 == 0:
                n = n // 5
                was_divided = True
            if not was_divided:
                return False
        
        return True
                
# Tests

print(Solution().isUgly(12)) # True
print(Solution().isUgly(25)) # True
print(Solution().isUgly(1)) # True
print(Solution().isUgly(11)) # False
print(Solution().isUgly(34)) # False
print(Solution().isUgly(-2)) # False