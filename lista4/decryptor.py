from cryptogram import Cryptogram
import operator


class Decryptor:

    def __init__(self, data_file):
        # List of cryptograms from file
        self.cryptograms = []

        # Name of file with cryptograms
        self.data_file = data_file

        # Generating dict with letters and signs frequency (ASCII code).
        self.letters_freq = {
            'a': 89, 'i': 82, 'o': 78, 'e': 77, 'z': 56, 'n': 55, 'r': 47, 'w': 47, 's': 43, 't': 40, 'c': 40, 'y': 38,
            'k': 35, 'd': 33, 'p': 31, 'm': 28, 'u': 25, 'j': 23, 'l': 21, 'b': 15, 'g': 14, 'h': 11, 'f': 3, 'q': 1,
            'v': 1, 'x': 1, ' ': 100, ',': 10, '.': 10, '-': 10, '"': 10, '!': 10, '?': 10, ':': 10, ';': 10, '(': 10,
            ')': 10
        }

        # Big letters - 1% frequency
        for i in range(65, 91):
            self.letters_freq[chr(i)] = 10

        # Numbers - 1% frequency
        for i in range(48, 58):
            self.letters_freq[chr(i)] = 10

    # Reading cryptograms from file
    def get_data_from_file(self):
        with open(self.data_file, 'r') as file:
            for line in file:
                self.cryptograms.append(Cryptogram(line))

    # Searching for key which was used to encrypt messages.
    def find_key(self):
        key = []

        # Length of the longest cryptogram
        longest = 0

        # Searching for length of the longest cryptogram
        for crypt in self.cryptograms:
            if len(crypt.chars) > longest:
                longest = len(crypt.chars)

        for i in range(0, longest):
            # Dict with signs which could be key
            possible_key = {}

            # Cryptograms which length is smaller than current i
            matching_cryptograms = []

            # Searching for cryptograms which length is smaller than current i
            for crypt in self.cryptograms:
                if i < len(crypt.chars):
                    matching_cryptograms.append(crypt)

            for crypt in matching_cryptograms:
                for possible in self.letters_freq.keys():
                    tmp = (ord(crypt.get_chr(i)) ^ ord(possible), self.letters_freq[possible])

                    if tmp[0] not in possible_key.keys():
                        possible_key[tmp[0]] = tmp[1]
                    else:
                        possible_key[tmp[0]] = possible_key.get(tmp[0]) + self.letters_freq.get(possible)

            tmp_sorted = sorted(possible_key.items(), key=operator.itemgetter(1), reverse=True)
            possible_key = dict(tmp_sorted)

            best_possible = ord(' ')
            best_counter = 0

            for possible in possible_key.keys():
                counter = 0

                for crypt in matching_cryptograms:
                    if (chr(ord(crypt.get_chr(i)) ^ possible)) in self.letters_freq.keys():
                        counter += 1

                if counter > best_counter:
                    best_counter = counter
                    best_possible = possible

            key.append(best_possible)

        return key

    # Write decrypted messages to file
    def output(self):
        key = self.find_key()
        with open('output.txt', 'w') as file:
            for crypt in self.cryptograms:
                for i in range(0, len(crypt.chars)):
                    file.write(chr(ord(crypt.get_chr(i)) ^ key[i]))
                file.write('\n')
