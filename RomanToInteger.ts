function romanToInt(s: string): number {
    const map = new Map<string, number>([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    let wynik = 0;

    for(let i = 0; i < s.length; i++){
        const obecna = map.get(s[i]!);
        const nastepna = map.get(s[i + 1]!) || 0;
        if(obecna < nastepna){
            wynik -= obecna;
        } else {
            wynik += obecna;
        }
    }
    return wynik;
}