const generateCards = (r, n) => {
    let result = [];
    
    let card = [];
    for (let i = 1; i<= n+1; i++) {
        card.push(i);
    }

    result.push(card)
    for (let j=1; j<=n; j++)  {
       r=r+1
       card = [1]
       for (let k=1; k<=n; k++) {
            card.push(n + n * (j-1) + k+1)
       }
       result.push(card)
    }
    for (let i= 1; i<=n; i++) {
       for (let j=1; j<=n; j++) {
          r=r+1
          card = [i+1]
          for (let k=1; k<= n; k++) {
            card.push(n + 2 + n * (k-1) + (((i-1) * (k-1) +j-1) % n))
          }
          result.push(card)
        }
    }
    return result;
}

console.log(generateCards(1, 7));

