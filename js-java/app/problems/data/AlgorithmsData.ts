
// 알고리즘 문제 목록과 코드 예시
export const problems = [
    // 기존 문제들
    {
      id: 1,
      title: '피보나치 수열',
      description: `주어진 숫자 n에 대해 n번째 피보나치 수를 반환하는 함수를 작성하세요.`,
      code: `function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  console.log(fibonacci(5)); // 5`,
    },
    {
      id: 2,
      title: '소수 판별',
      description: `주어진 숫자가 소수인지 판별하는 함수를 작성하세요.`,
      code: `function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  console.log(isPrime(7)); // true`,
    },
    {
      id: 3,
      title: '정렬된 배열 합치기',
      description: `두 개의 정렬된 배열을 하나의 정렬된 배열로 합치는 함수를 작성하세요.`,
      code: `function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
  }
  console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]`,
    },
    {
      id: 4,
      title: '중복 문자 제거',
      description: `주어진 문자열에서 중복 문자를 제거하고, 남은 문자를 반환하는 함수를 작성하세요.`,
      code: `function removeDuplicates(str) {
    return [...new Set(str)].join('');
  }
  console.log(removeDuplicates("hello world")); // "helo wrd"`,
    },
    {
      id: 5,
      title: '배열의 두 수 합',
      description: `주어진 정수 배열에서 두 수의 합이 특정 목표 값이 되는 두 수의 인덱스를 찾는 함수를 작성하세요.`,
      code: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      map.set(nums[i], i);
    }
  }
  console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]`,
    },
    {
      id: 6,
      title: '문자열 역순',
      description: `주어진 문자열을 역순으로 반환하는 함수를 작성하세요.`,
      code: `function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("hello")); // "olleh"`,
    },
    {
      id: 7,
      title: '최대 공약수',
      description: `두 숫자의 최대 공약수를 찾는 함수를 작성하세요.`,
      code: `function gcd(a, b) {
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  }
  console.log(gcd(48, 18)); // 6`,
    },
    {
      id: 8,
      title: '행렬 전치',
      description: `주어진 2D 행렬을 전치하는 함수를 작성하세요.`,
      code: `function transpose(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  }
  console.log(transpose([[1, 2, 3], [4, 5, 6]])); // [[1, 4], [2, 5], [3, 6]]`,
    },
    {
      id: 9,
      title: '배열의 중간값',
      description: `주어진 정수 배열의 중간값을 찾는 함수를 작성하세요.`,
      code: `function median(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
  }
  console.log(median([3, 1, 2, 5, 4])); // 3`,
    },
    {
      id: 10,
      title: '자릿수 합',
      description: `주어진 숫자의 자릿수를 모두 더하는 함수를 작성하세요.`,
      code: `function sumOfDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
  }
  console.log(sumOfDigits(1234)); // 10`,
    },
    
    // 추가된 문제들
    {
      id: 11,
      title: '계단 오르기',
      description: `n개의 계단을 오르는 방법의 수를 구하는 함수를 작성하세요. 한 번에 1칸 또는 2칸 오를 수 있습니다.`,
      code: `function climbStairs(n) {
    if (n <= 1) return 1;
    return climbStairs(n - 1) + climbStairs(n - 2);
  }
  console.log(climbStairs(4)); // 5`,
    },
    {
      id: 12,
      title: '문자열 압축',
      description: `주어진 문자열을 압축하여 반환하는 함수를 작성하세요. 같은 문자가 연속되는 경우에만 압축합니다.`,
      code: `function compressString(str) {
    let compressed = '';
    let count = 1;
    
    for (let i = 1; i <= str.length; i++) {
      if (str[i] === str[i - 1]) {
        count++;
      } else {
        compressed += str[i - 1] + (count > 1 ? count : '');
        count = 1;
      }
    }
    return compressed;
  }
  console.log(compressString("aaabbbccdaa")); // "a3b3c2d1a2"`,
    },
    {
      id: 13,
      title: '배열 회전',
      description: `주어진 배열을 k만큼 회전시키는 함수를 작성하세요.`,
      code: `function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;
    return arr.slice(n - k).concat(arr.slice(0, n - k));
  }
  console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]`,
    },
    {
      id: 14,
      title: '최소 경로 합',
      description: `주어진 2D 배열에서 가장 왼쪽 상단에서 오른쪽 하단으로 가는 최소 경로의 합을 구하는 함수를 작성하세요.`,
      code: `function minPathSum(grid) {
    const m = grid.length, n = grid[0].length;
    for (let i = 1; i < m; i++) grid[i][0] += grid[i - 1][0];
    for (let j = 1; j < n; j++) grid[0][j] += grid[0][j - 1];
    
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
      }
    }
    return grid[m - 1][n - 1];
  }
  console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])); // 7`,
    },
    {
      id: 15,
      title: '동전 교환',
      description: `주어진 금액을 동전의 최소 개수로 교환하는 방법을 구하는 함수를 작성하세요.`,
      code: `function coinChange(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (const coin of coins) {
      for (let i = coin; i <= amount; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
  }
  console.log(coinChange([1, 2, 5], 11)); // 3`,
    },
    {
      id: 16,
      title: '배열 내에서 두 수의 차이',
      description: `주어진 정수 배열에서 두 수의 차이가 특정 목표 값이 되는 두 수의 인덱스를 찾는 함수를 작성하세요.`,
      code: `function twoDiff(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = nums[i] - target;
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      map.set(nums[i], i);
    }
  }
  console.log(twoDiff([1, 5, 3, 4, 2], 2)); // [1, 3]`,
    },
    {
      id: 17,
      title: '소수의 합',
      description: `주어진 숫자까지의 모든 소수의 합을 구하는 함수를 작성하세요.`,
      code: `function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) sum += i;
    }
    return sum;
  }
  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  }
  console.log(sumPrimes(10)); // 17`,
    },
    {
      id: 18,
      title: '가장 긴 증가하는 부분 수열',
      description: `주어진 배열에서 가장 긴 증가하는 부분 수열의 길이를 구하는 함수를 작성하세요.`,
      code: `function lengthOfLIS(nums) {
    const dp = Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }
    return Math.max(...dp);
  }
  console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4`,
    },
    {
      id: 19,
      title: '부분 집합',
      description: `주어진 배열의 모든 부분 집합을 구하는 함수를 작성하세요.`,
      code: `function subsets(nums) {
    const result = [[]];
    for (const num of nums) {
      const newSubsets = result.map(subset => [...subset, num]);
      result.push(...newSubsets);
    }
    return result;
  }
  console.log(subsets([1, 2, 3])); // [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]`,
    },
    {
      id: 20,
      title: '균형잡힌 괄호',
      description: `주어진 문자열이 균형 잡힌 괄호인지 판별하는 함수를 작성하세요.`,
      code: `function isValid(s) {
    const stack = [];
    const mapping = {')': '(', '}': '{', ']': '['};
    
    for (const char of s) {
      if (mapping[char]) {
        const topElement = stack.length === 0 ? '#' : stack.pop();
        if (topElement !== mapping[char]) return false;
      } else {
        stack.push(char);
      }
    }
    return stack.length === 0;
  }
  console.log(isValid("()")); // true`,
    },
    {
      id: 21,
      title: '최대 직사각형',
      description: `주어진 2D 배열에서 최대 직사각형의 넓이를 구하는 함수를 작성하세요.`,
      code: `function maximalRectangle(matrix) {
    if (matrix.length === 0) return 0;
    const heights = Array(matrix[0].length).fill(0);
    let maxArea = 0;
  
    for (const row of matrix) {
      for (let j = 0; j < row.length; j++) {
        heights[j] = row[j] === '1' ? heights[j] + 1 : 0;
      }
      maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
    return maxArea;
  }
  
  function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;
    heights.push(0);
  
    for (let i = 0; i < heights.length; i++) {
      while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
        const h = heights[stack.pop()];
        const w = stack.length ? i - stack[stack.length - 1] - 1 : i;
        maxArea = Math.max(maxArea, h * w);
      }
      stack.push(i);
    }
    return maxArea;
  }
  console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])); // 6`,
    },
    {
      id: 22,
      title: '주식 거래 최대 이익',
      description: `주어진 배열에서 주식의 최대 이익을 구하는 함수를 작성하세요. 주식은 하루에 한 번만 거래할 수 있습니다.`,
      code: `function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
  
    for (const price of prices) {
      if (price < minPrice) {
        minPrice = price;
      } else if (price - minPrice > maxProfit) {
        maxProfit = price - minPrice;
      }
    }
    return maxProfit;
  }
  console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5`,
    },
    {
      id: 23,
      title: '짝수 및 홀수 정렬',
      description: `주어진 정수 배열에서 짝수는 앞쪽에, 홀수는 뒤쪽에 있도록 정렬하는 함수를 작성하세요.`,
      code: `function sortEvenOdd(arr) {
    const evens = arr.filter(num => num % 2 === 0);
    const odds = arr.filter(num => num % 2 !== 0);
    return [...evens, ...odds];
  }
  console.log(sortEvenOdd([3, 1, 2, 4])); // [2, 4, 3, 1]`,
    },
    {
      id: 24,
      title: '중복 요소 제거',
      description: `주어진 배열에서 중복된 요소를 제거하고 새로운 배열을 반환하는 함수를 작성하세요.`,
      code: `function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]`,
    },
    {
      id: 25,
      title: '자연수의 합',
      description: `1부터 n까지의 자연수의 합을 구하는 함수를 작성하세요.`,
      code: `function sumNaturalNumbers(n) {
    return (n * (n + 1)) / 2;
  }
  console.log(sumNaturalNumbers(5)); // 15`,
    },
    {
      id: 26,
      title: '연속된 1의 최대 길이',
      description: `주어진 배열에서 연속된 1의 최대 길이를 구하는 함수를 작성하세요.`,
      code: `function maxConsecutiveOnes(arr) {
    let maxCount = 0, currentCount = 0;
  
    for (const num of arr) {
      if (num === 1) {
        currentCount++;
        maxCount = Math.max(maxCount, currentCount);
      } else {
        currentCount = 0;
      }
    }
    return maxCount;
  }
  console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3`,
    },
    {
      id: 27,
      title: '짝수와 홀수의 합',
      description: `주어진 배열에서 짝수와 홀수의 합을 구하는 함수를 작성하세요.`,
      code: `function sumEvenOdd(arr) {
    let evenSum = 0, oddSum = 0;
  
    for (const num of arr) {
      if (num % 2 === 0) {
        evenSum += num;
      } else {
        oddSum += num;
      }
    }
    return { evenSum, oddSum };
  }
  console.log(sumEvenOdd([1, 2, 3, 4, 5])); // { evenSum: 6, oddSum: 9 }`,
    },
    {
      id: 28,
      title: '구구단',
      description: `주어진 숫자 n에 대해 n단의 구구단을 출력하는 함수를 작성하세요.`,
      code: `function multiplicationTable(n) {
    for (let i = 1; i <= 9; i++) {
      console.log(\`\${n} x \${i} = \${n * i}\`);
    }
  }
  multiplicationTable(2);`,
    },
    {
      id: 29,
      title: '부르트 포맷',
      description: `부르트 포맷으로 주어진 문자열을 변환하는 함수를 작성하세요.`,
      code: `function toBruteFormat(str) {
    return str
      .split(' ')
      .map(word => word.split('').reverse().join(''))
      .join(' ');
  }
  console.log(toBruteFormat("Hello World")); // "olleH dlroW"`,
    },
    {
      id: 30,
      title: 'N자리의 소수 찾기',
      description: `N자리의 소수를 찾는 함수를 작성하세요.`,
      code: `function findNDigitPrimes(n) {
    const start = Math.pow(10, n - 1);
    const end = Math.pow(10, n) - 1;
    const primes = [];
  
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  console.log(findNDigitPrimes(2)); // [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]`,
    },
    {
      id: 31,
      title: '정수 배열에서 두 수의 곱',
      description: `주어진 정수 배열에서 두 수의 곱이 특정 값이 되는 두 수의 인덱스를 찾는 함수를 작성하세요.`,
      code: `function twoProduct(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (target % nums[i] === 0) {
        const complement = target / nums[i];
        if (map.has(complement)) {
          return [map.get(complement), i];
        }
      }
      map.set(nums[i], i);
    }
  }
  console.log(twoProduct([3, 2, 4], 6)); // [1, 2]`,
    },
    {
      id: 32,
      title: '최대값과 최소값',
      description: `주어진 배열에서 최대값과 최소값을 찾는 함수를 작성하세요.`,
      code: `function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
  
    for (const num of arr) {
      if (num > max) max = num;
      if (num < min) min = num;
    }
    return { max, min };
  }
  console.log(findMaxMin([3, 1, 4, 1, 5, 9])); // { max: 9, min: 1 }`,
    },
    {
      id: 33,
      title: '피보나치 수열',
      description: `주어진 n에 대해 n번째 피보나치 수를 반환하는 함수를 작성하세요.`,
      code: `function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  console.log(fibonacci(6)); // 8`,
    },
    {
      id: 34,
      title: '문자열 회문 검사',
      description: `주어진 문자열이 회문인지 판별하는 함수를 작성하세요.`,
      code: `function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // true`,
    },
    {
      id: 35,
      title: '자리수의 합',
      description: `주어진 정수의 자리수를 모두 더하는 함수를 작성하세요.`,
      code: `function sumDigits(num) {
    return num
      .toString()
      .split('')
      .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
  console.log(sumDigits(12345)); // 15`,
    },
  ];