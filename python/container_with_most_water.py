class Solution:
    '''
    Método que calcula a maior área possível de se obter com uma lista de colunas,
    onde a base é representada pelos índice da lista e a altura cada valor da lista.
    O objetivo é descobrir qual combinação de duas colunas gerará a maior área.
    '''
    '''
    Given an array that represents a list of columns on a base,
    the method calculates which set of two columns will result in the largest area
    '''
    def max_area(self, height: [int]) -> int:
        max_area_found = 0
        base_start = 0
        base_end = len(height) - 1

        while base_start <= base_end:
            height_start = height[base_start]
            height_end = height[base_end]
            max_area_found = max(min(height_start, height_end) * (base_end - base_start), max_area_found)

            if height_start < height_end:
                base_start += 1
            else:
                base_end -= 1

        return max_area_found


print(Solution().max_area([1,8,6,2,5,4,8,3,7]))
print(Solution().max_area([1,8,6,2,5,4,8,7,3]))