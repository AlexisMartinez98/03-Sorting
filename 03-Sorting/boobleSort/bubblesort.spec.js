describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it("Debe ordenar el arreglo", function () {
    let array = [50, 32, 85, 88, 63, 22];
    expect(bubbleSort(array)).toEqual([22, 32, 50, 63, 85, 88]);
  });

  it("El array debe mantenerse ordenado", function () {
    let array = [1, 2, 3, 4, 5];
    expect(bubbleSort(array)).toEqual([1, 2, 3, 4, 5]);
  });

  it("El arreglo debe estar de menor a mayor", function () {
    let array = [5, 4, 3, 2, 1];
    expect(bubbleSort(array)).toEqual([1, 2, 3, 4, 5]);
  });
});
