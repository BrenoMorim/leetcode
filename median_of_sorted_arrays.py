class Solution:
    '''
    Dado um array, a função deve ordená-lo e retornar sua mediana
    '''
    def findMedianSortedArrays(self, nums1: list, nums2: list) -> float:
        '''
        The goal here is that given an array, the function has to return the median of it
        '''
        nums = nums1 + nums2
        nums.sort()
        if len(nums) % 2 != 0:
            # In case the lenght is odd
            median = int(len(nums) / 2)
            return nums[median]
        else:
            # In case the lenght is even
            median = len(nums) // 2
            return (nums[median] + nums[median - 1]) / 2
