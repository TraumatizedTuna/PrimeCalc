var primes = [0, 2, 3, 5, 7, 11, 13, 17, 19];
function getPrime(n) {
    return primes[n];
}

class Rat extends Array {
    constructor(x) {
        super();

        this.negative = x < 0;
        x = Math.abs(x);

        var i = 0;
        while (x > 1) {
            while (x % primes[i] === 0) {
                x = x / i
                this[i]++;
            }
        }
    }
}