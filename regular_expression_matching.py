import re

class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        result = re.fullmatch(f"^{p}$", s)
        return result != None