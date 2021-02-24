# refresher on inheritance in python
# feel free to skip this (or check it out if you're curious)

# inherit method from one class to the other

class Animal:
    def __init__(self, name, says):
        self._name = name
        self._says = says

    def animalSay(self):
        print('{} says {}'.format(self._name, self._says))

class Rabit(Animal):
    def __init__(self, name, says):
        Animal.__init__(self, name, says)

rabit = Rabit('Suzy','twirk-twirk')

# calling method from class we inherit from
rabit.animalSay() # Suzy says twirk-twirk --



