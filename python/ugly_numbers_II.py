class Solution:
    '''
    O objetivo desse desafio é encontrar o enésimo número "feio", sabendo que
    um número feio é aquele que só possui 2, 3 e 5 em seus fatores primos quando fatorado
    '''
    '''
    The goal of this exercise is to find the nth ugly number, knowing that
    an ugly number is an integer that only contains 2, 3 and 5 in its prime factors
    '''

    def nthUglyNumber(self, n: int) -> int:
        # It already starts with 1, because it doesn't have any prime factors so
        # we can't find 1 by using 2, 3 or 5, which means we need to put it in the list beforehand
        ugly_numbers = [1]

        num_of_2s = 0
        num_of_3s = 0
        num_of_5s = 0

        while len(ugly_numbers) < n:
            # Each loop calculates the next ugly number:

            # when it becomes equal or almost equal to the last ugly number found,
            # the loop will run once more in order to find the next one.
            while ugly_numbers[num_of_2s] * 2 <= ugly_numbers[-1]:
                num_of_2s += 1
            while ugly_numbers[num_of_3s] * 3 <= ugly_numbers[-1]:
                num_of_3s += 1
            while ugly_numbers[num_of_5s] * 5 <= ugly_numbers[-1]:
                num_of_5s += 1

            # Now we just need to append the smallest number of these:
            # each one of these three possibilities represent the multiples of 2, 3 and 5,
            # which will eventually be added in the list in ascending order

            ugly_numbers.append(
                min(
                    ugly_numbers[num_of_2s] * 2, 
                    ugly_numbers[num_of_3s] * 3, 
                    ugly_numbers[num_of_5s] * 5
                )
            )
        
        return ugly_numbers[-1]

# Tests

print(Solution().nthUglyNumber(10)) # 12
print(Solution().nthUglyNumber(1)) # 1
print(Solution().nthUglyNumber(1690)) # 2123366400