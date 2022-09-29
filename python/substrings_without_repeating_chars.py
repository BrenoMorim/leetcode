class Solution:
    '''
    O objetivo aqui é dado uma string, pegar todas as substrings que não possuem
    caracteres repetidos, a lógica foi dividida em três métodos, um que calcula todas
    as possibilidades de início e fim das substrings, outra que verifica se há caracteres
    repetidos na substring e o terceiro que usa os outros dois para guardar todas as
    substrings que não tem caracteres repetidos em um set, para evitar repetições.
    '''
    def substrings_without_repeated_chars(self, s: str) -> int:
        solutions = {}
        for (start, end) in self.calculate_possibilities(s):
            substring = s[start:end]
            if not self.has_repeated_chars(substring):
                solutions.add(substring)
        return solutions

    def calculate_possibilities(self, s: str) -> [int]:
        return [(x, y + 1) for x in range(len(s)) for y in range(len(s)) if x <= y]

    def has_repeated_chars(self, s: str) -> bool:
        for char in s:
            if s.count(char) > 1:
                return True
        return False

# Tests

print(Solution().calculate_possibilities("abc"))
print(Solution().has_repeated_chars("abc"))
print(Solution().substrings_without_repeated_chars("aabc"))