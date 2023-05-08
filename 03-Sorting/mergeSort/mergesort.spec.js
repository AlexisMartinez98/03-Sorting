describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    expect(split([15, 27, 84, 94, 54, 66, 7, 18])).toEqual([
      [15, 27, 84, 94],
      [54, 66, 7, 18],
    ]);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    expect(merge([4, 7, 8, 2, 1], [3, 5, 6, 9])).toEqual([
      3, 4, 5, 6, 7, 8, 2, 1, 9,
    ]);
  });
});
describe("mergeSort", function () {
  it("es capaz de ordenar culquier arreglo", function () {
    expect(mergeSort([15, 27, 84, 94, 54, 66, 7, 18])).toEqual([
      7, 15, 18, 27, 54, 66, 84, 94,
    ]);
  });
});
