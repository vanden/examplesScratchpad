# Some illustrative examples of how to add keyword arguments to a subclass
# with and without the use of *args and **kwargs
class A():
    def __init__(self, positionalArg, keywordArg=42, commonArg='A'):
        self.positional = positionalArg
        self.kywrd = keywordArg
        self.commonArg = commonArg
        self.data = 10**3

class B(A):
    def __init__(self, positionalArg, subClassKW='b', commonArg='B', onlyB=1):
        super().__init__(positionalArg, commonArg=commonArg)
        self.subKeyWord = subClassKW
        self.data = onlyB

class C(A):
    def __init__(self, *args, onlyC='C specific', **kwargs):
        self.onlyC = onlyC
        super().__init__(*args, **kwargs)

a = A("Positional")
print(a.__dict__)
        
b = B('first')
print(b.__dict__)

c = C('positional from c', keywordArg='again, from c', onlyC='custom for c instance')
print(c.__dict__)
