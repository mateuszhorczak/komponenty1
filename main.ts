// Zadanie 1

function countVowels(input: string): number {
    const vowels = 'aąeęiyouóAĄEĘIYOUÓ';
    let count = 0;
    for (const char of input) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count
}

// Zadanie 2
function ifSortedAscending(input: Array<number>): boolean {
    for (let i = 0; i < input.length - 1; ++i) {
        if (input[i + 1] < input[i]) {
            return false;
        }
    }
    return true;
}



console.log(countVowels("Hello World"))
console.log(ifSortedAscending([1, 2, 5, 8, 3, 11, 12]))
console.log(ifSortedAscending([1, 2, 5, 8]))
