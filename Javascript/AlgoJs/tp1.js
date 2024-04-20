let table = [52, 2, 10, 5, 1, 120, 13, 500, 3];
let x = 0;
for (j = 1; j <= table.length; j++) {
  if (table[j] > table[x]) {
    x = j;
  }
}
console.log(table[x]);

for (j = 0; j <= table.length - 1; j++) {
  for (i = j + 1; i <= table.length; i++) {
    if (table[i] > table[j]) {
      j = i;
    }
  }
}
