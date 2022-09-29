class Solution:
    '''
    O objetivo desse desafio é encontrar o maior prefixo comum entre um conjunto de palavras
    Exemplo: ["carro", "caro", "careta"] = "car"
    A lógica realizada aqui foi pegar o comprimento da menor string do array e então
    fazer um for procurando os possíveis prefixos de forma decrescente, com um range de passo negativo
    '''
    '''
    The goal here is to find the longest prefix that is common to all words of an array
    '''
    def longest_common_prefix(self, strs: list) -> str:
        # lenght of the longest prefix possible
        max_prefix_lenght = min([len(s) for s in strs])
        for i in range(max_prefix_lenght, 0, -1):
            current_prefix = strs[0][:i]
            # checks if all the elements are the same in this array
            # if it's true, then we'll have found the longest prefix
            is_common_prefix = [word[:i] for word in strs].count(current_prefix) == len(strs)
            if is_common_prefix:
                return current_prefix
        return ''

# testing
print(Solution().longestCommonPrefix(["flo", "flower", "flow"])) # result = flo