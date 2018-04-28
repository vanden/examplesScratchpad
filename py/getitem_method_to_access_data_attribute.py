class dataContainer():
    def __init__(self):
        self.data = {1:2, 42:True, 'red':'blue'}

    def __getitem__(self, key):
        return self.data[key]

dc = dataContainer()
print(dc[1])
print(dc[42])
print(dc['red'])
print(dc[23987872])
