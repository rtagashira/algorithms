// We need to turn a mixed fraction into an improper reduced fraction

function mixedFractionToImproper(a) {
  return [a[0] * a[2] + a[1], a[2]]
}

console.log(mixedFractionToImproper([3, 1, 2]))//[7, 2]