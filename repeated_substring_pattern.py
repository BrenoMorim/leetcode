class Solution:
    '''
    Método que checa se a string pode ser obtida através da repetição de uma de suas substrings
    '''
    '''
    Method that checks if a string can be obtained through the repetition of one of its substrings
    Example: "abcabc" returns True, because "abc" * 2 = "abcabc"
    '''
    def repeatedSubstringPattern(self, s: str) -> bool:
        for i in range(1, len(s) // 2 + 1):
            if (s[:i] * (len(s) // i)) == s:
                return True
        return False

print(Solution().repeatedSubstringPattern("abab"))
print(Solution().repeatedSubstringPattern("aba"))
print(Solution().repeatedSubstringPattern("aaaaaaa"))
print(Solution().repeatedSubstringPattern("breno"))