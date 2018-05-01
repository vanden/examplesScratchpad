import timeit
import math

print(timeit.timeit('[i**0.5 for i in range(1000)]', setup="from math import sqrt", number=10000))
print(timeit.timeit('[sqrt(i) for i in range(1000)]', setup="from math import sqrt", number=10000))

print()
