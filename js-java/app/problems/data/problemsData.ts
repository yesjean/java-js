// 배열 메서드 목록과 코드 예시
 export const problems = [
    {
      id: 1,
      title: 'Array.prototype.map',
      description: `주어진 배열의 각 요소에 대해 제공된 함수를 호출하여 새로운 배열을 생성합니다.`,
      code: `const numbers = [1, 2, 3, 4];
  const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8]`,
    },
    {
      id: 2,
      title: 'Array.prototype.filter',
      description: `주어진 배열에서 제공된 테스트 함수를 통과하는 모든 요소로 이루어진 새로운 배열을 생성합니다.`,
      code: `const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]`,
    },
    {
      id: 3,
      title: 'Array.prototype.reduce',
      description: `주어진 배열의 각 요소에 대해 제공된 리듀서 함수를 실행하여 단일 값을 생성합니다.`,
      code: `const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((acc, num) => acc + num, 0); // 10`,
    },
    {
      id: 4,
      title: 'Array.prototype.forEach',
      description: `주어진 배열의 각 요소에 대해 제공된 함수를 실행합니다. 반환 값은 없습니다.`,
      code: `const numbers = [1, 2, 3];
  numbers.forEach(num => console.log(num)); // 1, 2, 3`,
    },
    {
      id: 5,
      title: 'Array.prototype.find',
      description: `제공된 테스트 함수를 통과하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없으면 \`undefined\`를 반환합니다.`,
      code: `const numbers = [1, 2, 3, 4];
  const found = numbers.find(num => num > 2); // 3`,
    },
    {
      id: 6,
      title: 'Array.prototype.findIndex',
      description: `제공된 테스트 함수를 통과하는 첫 번째 요소의 인덱스를 반환합니다. 그런 요소가 없으면 -1을 반환합니다.`,
      code: `const numbers = [1, 2, 3, 4];
  const index = numbers.findIndex(num => num > 2); // 2`,
    },
    {
      id: 7,
      title: 'Array.prototype.includes',
      description: `배열이 특정 요소를 포함하고 있는지 확인합니다. \`true\` 또는 \`false\`를 반환합니다.`,
      code: `const numbers = [1, 2, 3];
  const hasTwo = numbers.includes(2); // true`,
    },
    {
      id: 8,
      title: 'Array.prototype.slice',
      description: `배열의 일부분을 얕은 복사본으로 반환합니다.`,
      code: `const numbers = [1, 2, 3, 4];
  const sliced = numbers.slice(1, 3); // [2, 3]`,
    },
    {
      id: 9,
      title: 'Array.prototype.splice',
      description: `배열의 기존 요소를 삭제하거나 교체하고, 새 요소를 추가합니다.`,
      code: `const numbers = [1, 2, 3, 4];
  numbers.splice(1, 2, 5); // numbers는 [1, 5, 4]가 됨`,
    },
    {
      id: 10,
      title: 'Array.prototype.concat',
      description: `두 개 이상의 배열을 결합하여 새로운 배열을 생성합니다.`,
      code: `const arr1 = [1, 2];
  const arr2 = [3, 4];
  const combined = arr1.concat(arr2); // [1, 2, 3, 4]`,
    },
    {
      id: 11,
      title: 'Array.prototype.join',
      description: `배열의 모든 요소를 문자열로 결합하고, 주어진 구분자로 구분합니다.`,
      code: `const fruits = ['apple', 'banana', 'cherry'];
  const fruitString = fruits.join(', '); // "apple, banana, cherry"`,
    },
    {
      id: 12,
      title: 'Array.prototype.reverse',
      description: `배열의 요소 순서를 반전시킵니다.`,
      code: `const numbers = [1, 2, 3];
  numbers.reverse(); // [3, 2, 1]`,
    },
    {
      id: 13,
      title: 'Array.prototype.sort',
      description: `배열의 요소를 정렬합니다.`,
      code: `const numbers = [3, 1, 4, 2];
  numbers.sort(); // [1, 2, 3, 4]`,
    },
    {
      id: 14,
      title: 'Array.prototype.fill',
      description: `배열의 모든 요소를 정해진 값으로 채웁니다.`,
      code: `const arr = new Array(3).fill(0); // [0, 0, 0]`,
    },
    {
      id: 15,
      title: 'Array.prototype.every',
      description: `배열의 모든 요소가 제공된 테스트 함수를 통과하는지 확인합니다. \`true\` 또는 \`false\`를 반환합니다.`,
      code: `const numbers = [2, 4, 6];
  const allEven = numbers.every(num => num % 2 === 0); // true`,
    },
    {
      id: 16,
      title: 'Array.prototype.some',
      description: `배열의 일부 요소가 제공된 테스트 함수를 통과하는지 확인합니다. \`true\` 또는 \`false\`를 반환합니다.`,
      code: `const numbers = [1, 3, 5];
  const hasEven = numbers.some(num => num % 2 === 0); // false`,
    },
    {
      id: 17,
      title: 'Array.prototype.flat',
      description: `배열을 평탄화하여 새로운 배열을 생성합니다.`,
      code: `const nested = [1, [2, [3]]];
  const flatArray = nested.flat(2); // [1, 2, 3]`,
    },
    {
      id: 18,
      title: 'Array.prototype.flatMap',
      description: `각 요소에 제공된 함수를 적용한 후, 결과를 평탄화하여 새로운 배열을 생성합니다.`,
      code: `const arr = [1, 2, 3];
  const flattened = arr.flatMap(num => [num, num * 2]); // [1, 2, 2, 4, 3, 6]`,
    },
    {
      id: 19,
      title: 'Array.prototype.reduceRight',
      description: `배열의 각 요소에 대해 제공된 리듀서 함수를 오른쪽에서 왼쪽으로 실행하여 단일 값을 생성합니다.`,
      code: `const numbers = [1, 2, 3, 4];
  const product = numbers.reduceRight((acc, num) => acc * num, 1); // 24`,
    },
    {
      id: 20,
      title: 'Array.prototype.shift',
      description: `배열의 첫 번째 요소를 제거하고 그 값을 반환합니다.`,
      code: `const numbers = [1, 2, 3];
  const first = numbers.shift(); // 1, numbers는 [2, 3]가 됨`,
    },
    {
      id: 21,
      title: 'Array.prototype.unshift',
      description: `배열의 맨 앞에 하나 이상의 요소를 추가하고 새로운 길이를 반환합니다.`,
      code: `const numbers = [2, 3];
  numbers.unshift(1); // numbers는 [1, 2, 3]가 됨`,
    },
    {
      id: 22,
      title: 'Array.prototype.fill',
      description: `배열의 일부 또는 전체 요소를 특정 값으로 채웁니다.`,
      code: `const arr = [1, 2, 3];
  arr.fill(0, 1, 3); // [1, 0, 0]`,
    },
    {
      id: 23,
      title: 'Array.prototype.copyWithin',
      description: `배열의 일부를 같은 배열 내의 다른 위치로 복사합니다.`,
      code: `const arr = [1, 2, 3, 4, 5];
  arr.copyWithin(0, 3); // [4, 5, 3, 4, 5]`,
    },
    {
      id: 24,
      title: '배열을 중복 제거하기',
      description: `주어진 배열에서 중복된 요소를 제거하는 함수를 작성하세요.`,
      code: `function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]`,
    },
    {
      id: 25,
      title: '두 배열의 교집합',
      description: `두 배열의 교집합을 구하는 함수를 작성하세요.`,
      code: `function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
  }
  console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]`,
    },
    {
      id: 26,
      title: '배열의 요소를 랜덤으로 섞기',
      description: `주어진 배열의 요소를 랜덤으로 섞는 함수를 작성하세요.`,
      code: `function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  console.log(shuffleArray([1, 2, 3, 4])); // 랜덤한 순서로 배열이 출력됨`,
    },
    {
      id: 27,
      title: '배열의 요소를 정렬하기',
      description: `주어진 배열의 요소를 오름차순으로 정렬하는 함수를 작성하세요.`,
      code: `function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  console.log(sortArray([4, 2, 3, 1])); // [1, 2, 3, 4]`,
    },
    {
      id: 28,
      title: 'Array.prototype.indexOf',
      description: `배열에서 주어진 값의 첫 번째 인덱스를 반환합니다. 값이 존재하지 않으면 -1을 반환합니다.`,
      code: `const numbers = [1, 2, 3, 4];
  const index = numbers.indexOf(3); // 2`,
    },
    {
      id: 29,
      title: 'Array.prototype.lastIndexOf',
      description: `배열에서 주어진 값의 마지막 인덱스를 반환합니다. 값이 존재하지 않으면 -1을 반환합니다.`,
      code: `const numbers = [1, 2, 3, 2, 1];
  const lastIndex = numbers.lastIndexOf(2); // 3`,
    },
    {
      id: 30,
      title: 'Array.prototype.toString',
      description: `배열을 문자열로 변환합니다. 각 요소는 쉼표로 구분됩니다.`,
      code: `const numbers = [1, 2, 3];
  const str = numbers.toString(); // "1,2,3"`,
    },
    {
      id: 31,
      title: 'Array.prototype.entries',
      description: `배열의 키-값 쌍을 포함하는 이터레이터 객체를 반환합니다.`,
      code: `const numbers = [10, 20, 30];
  const entries = numbers.entries();
  for (const entry of entries) {
    console.log(entry); // [0, 10], [1, 20], [2, 30]
  }`,
    },
    {
      id: 32,
      title: 'Array.prototype.keys',
      description: `배열의 인덱스 값을 포함하는 이터레이터 객체를 반환합니다.`,
      code: `const numbers = ['a', 'b', 'c'];
  const keys = numbers.keys();
  for (const key of keys) {
    console.log(key); // 0, 1, 2
  }`,
    },
    {
      id: 33,
      title: 'Array.prototype.values',
      description: `배열의 요소 값을 포함하는 이터레이터 객체를 반환합니다.`,
      code: `const fruits = ['apple', 'banana', 'cherry'];
  const values = fruits.values();
  for (const value of values) {
    console.log(value); // "apple", "banana", "cherry"
  }`,
    },
    {
      id: 34,
      title: '배열의 중복 요소 찾기',
      description: `주어진 배열에서 중복된 요소를 찾는 함수를 작성하세요.`,
      code: `function findDuplicates(arr) {
    const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
    return [...new Set(duplicates)];
  }
  console.log(findDuplicates([1, 2, 3, 2, 4, 4])); // [2, 4]`,
    },
    {
      id: 35,
      title: '배열의 요소를 문자열로 변환 후 합치기',
      description: `배열의 요소를 문자열로 변환한 후, 주어진 구분자로 합치는 함수를 작성하세요.`,
      code: `function joinArray(arr, separator) {
    return arr.join(separator);
  }
  console.log(joinArray(['a', 'b', 'c'], '-')); // "a-b-c"`,
    },
    {
      id: 36,
      title: '배열의 요소를 특정 기준으로 그룹화하기',
      description: `주어진 배열의 요소를 특정 기준으로 그룹화하는 함수를 작성하세요.`,
      code: `function groupBy(arr, key) {
    return arr.reduce((result, currentItem) => {
      const groupKey = currentItem[key];
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(currentItem);
      return result;
    }, {});
  }
  const people = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 25 }, { name: 'Charlie', age: 30 }];
  console.log(groupBy(people, 'age')); // { '25': [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 25 }], '30': [{ name: 'Charlie', age: 30 }] }
  `,
    },
    {
      id: 37,
      title: '배열의 요소를 역순으로 정렬하기',
      description: `주어진 배열의 요소를 역순으로 정렬하는 함수를 작성하세요.`,
      code: `function reverseSort(arr) {
    return arr.sort((a, b) => b - a);
  }
  console.log(reverseSort([3, 1, 4, 2])); // [4, 3, 2, 1]`,
    },
    {
      id: 38,
      title: '2차원 배열을 1차원 배열로 변환하기',
      description: `2차원 배열을 1차원 배열로 변환하는 함수를 작성하세요.`,
      code: `function flattenArray(arr) {
    return arr.reduce((flat, current) => flat.concat(current), []);
  }
  console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]`,
    },
    {
      id: 39,
      title: '주어진 배열에서 짝수와 홀수 분리하기',
      description: `주어진 배열에서 짝수와 홀수를 분리하여 두 개의 배열로 반환하는 함수를 작성하세요.`,
      code: `function separateEvenOdd(arr) {
    const evens = arr.filter(num => num % 2 === 0);
    const odds = arr.filter(num => num % 2 !== 0);
    return { evens, odds };
  }
  console.log(separateEvenOdd([1, 2, 3, 4, 5])); // { evens: [2, 4], odds: [1, 3, 5] }`,
    },
    {
      id: 40,
      title: 'Array.prototype.flat',
      description: `주어진 배열의 모든 하위 배열을 재귀적으로 평탄화하여 새로운 배열을 생성합니다.`,
      code: `const nestedArray = [1, [2, [3, 4]], 5];
  const flatArray = nestedArray.flat(2); // [1, 2, 3, 4, 5]`,
    },
    {
      id: 41,
      title: 'Array.prototype.flatMap',
      description: `각 요소에 주어진 함수를 호출한 후, 그 결과를 평탄화하여 새로운 배열을 생성합니다.`,
      code: `const arr = [1, 2, 3];
  const flatMapped = arr.flatMap(num => [num, num * 2]); // [1, 2, 2, 4, 3, 6]`,
    },
    {
      id: 42,
      title: '배열의 고유 요소 찾기',
      description: `주어진 배열에서 중복된 요소를 제거하고 고유한 요소로만 이루어진 배열을 반환하는 함수를 작성하세요.`,
      code: `function uniqueArray(arr) {
    return [...new Set(arr)];
  }
  console.log(uniqueArray([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]`,
    },
    {
      id: 43,
      title: '배열의 모든 요소를 특정 값으로 대체하기',
      description: `주어진 배열의 모든 요소를 특정 값으로 대체하는 함수를 작성하세요.`,
      code: `function replaceElements(arr, newValue) {
    return arr.fill(newValue);
  }
  console.log(replaceElements([1, 2, 3], 0)); // [0, 0, 0]`,
    },
    {
      id: 44,
      title: '배열을 부분적으로 대체하기',
      description: `주어진 배열의 특정 인덱스에서 시작하여 일부 요소를 대체하는 함수를 작성하세요.`,
      code: `function replacePortion(arr, start, deleteCount, newItems) {
    arr.splice(start, deleteCount, ...newItems);
    return arr;
  }
  console.log(replacePortion([1, 2, 3, 4], 1, 2, [5, 6])); // [1, 5, 6, 4]`,
    },
    {
      id: 45,
      title: '주어진 배열에서 특정 값의 개수 세기',
      description: `주어진 배열에서 특정 값이 몇 번 등장하는지 세는 함수를 작성하세요.`,
      code: `function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
  }
  console.log(countOccurrences([1, 2, 2, 3, 4, 2], 2)); // 3`,
    },
    {
      id: 46,
      title: '배열의 요소를 랜덤하게 섞기',
      description: `주어진 배열의 요소를 랜덤하게 섞는 함수를 작성하세요.`,
      code: `function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  console.log(shuffleArray([1, 2, 3, 4, 5])); // 랜덤 순서의 배열`,
    },
    {
      id: 47,
      title: '두 배열의 합집합 구하기',
      description: `두 개의 배열에서 중복된 요소를 제거하고 합집합을 반환하는 함수를 작성하세요.`,
      code: `function unionArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
  }
  console.log(unionArrays([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]`,
    },
    {
      id: 48,
      title: '배열의 두 요소를 교환하기',
      description: `주어진 배열에서 두 요소의 인덱스를 받아 교환하는 함수를 작성하세요.`,
      code: `function swapElements(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
  }
  console.log(swapElements([1, 2, 3, 4], 0, 2)); // [3, 2, 1, 4]`,
    },
    {
      id: 49,
      title: '배열에서 최대값 찾기',
      description: `주어진 배열에서 최대값을 찾는 함수를 작성하세요.`,
      code: `function findMax(arr) {
    return Math.max(...arr);
  }
  console.log(findMax([1, 2, 3, 4, 5])); // 5`,
    },
    {
      id: 50,
      title: '배열에서 최소값 찾기',
      description: `주어진 배열에서 최소값을 찾는 함수를 작성하세요.`,
      code: `function findMin(arr) {
    return Math.min(...arr);
  }
  console.log(findMin([1, 2, 3, 4, 5])); // 1`,
    },
    {
      id: 51,
      title: '배열에서 중간값 찾기',
      description: `주어진 배열에서 중간값을 찾는 함수를 작성하세요.`,
      code: `function findMedian(arr) {
    const sorted = arr.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
  }
  console.log(findMedian([3, 1, 2, 5, 4])); // 3`,
    },
    {
      id: 52,
      title: '배열의 모든 요소에 대해 주어진 함수를 호출하기',
      description: `주어진 배열의 모든 요소에 대해 주어진 함수를 호출하는 함수를 작성하세요.`,
      code: `function applyToEach(arr, func) {
    return arr.map(func);
  }
  console.log(applyToEach([1, 2, 3], x => x * 2)); // [2, 4, 6]`,
    },
    {
      id: 53,
      title: '배열을 문자열로 변환 후 배열로 다시 변환하기',
      description: `주어진 배열을 문자열로 변환한 후, 다시 배열로 변환하는 함수를 작성하세요.`,
      code: `function convertToStringAndBack(arr) {
    const str = arr.join(',');
    return str.split(',');
  }
  console.log(convertToStringAndBack(['a', 'b', 'c'])); // ['a', 'b', 'c']`,
    },
    {
      id: 54,
      title: '두 배열의 교집합 구하기',
      description: `두 배열에서 공통된 요소로 이루어진 교집합을 반환하는 함수를 작성하세요.`,
      code: `function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
  }
  console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]`,
    },
    {
      id: 55,
      title: '배열에서 특정 조건을 만족하는 모든 요소 찾기',
      description: `주어진 배열에서 특정 조건을 만족하는 모든 요소를 찾아 반환하는 함수를 작성하세요.`,
      code: `function filterByCondition(arr, condition) {
    return arr.filter(condition);
  }
  console.log(filterByCondition([1, 2, 3, 4, 5], num => num > 2)); // [3, 4, 5]`,
    },
  ];