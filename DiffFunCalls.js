const calc = {
    total:0,
    add(a){ 
        this.total += a;
        return this;
    },
    multiply(a){ 
        this.total *= a; 
        return this;
    },
    substract(a){ 
        this.total -= a; 
        return this;
    }
}

const res = calc.add(20).multiply(3).substract(20).add(10)
console.log(res.total)