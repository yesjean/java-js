export const problems = [
    {
      id: 1,
      title: '배열 정렬',
      description: `주어진 정수 배열을 정렬하는 메서드를 작성하세요.`,
      code: `import java.util.Arrays;
  
  public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {5, 3, 8, 1, 2};
      Arrays.sort(numbers);
      System.out.println(Arrays.toString(numbers)); // [1, 2, 3, 5, 8]
    }
  }`,
    },
    {
      id: 2,
      title: '배열의 최대값 찾기',
      description: `주어진 정수 배열에서 최대값을 찾는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {5, 3, 8, 1, 2};
      int max = numbers[0];
      for (int num : numbers) {
        if (num > max) {
          max = num;
        }
      }
      System.out.println(max); // 8
    }
  }`,
    },
    {
      id: 3,
      title: '배열의 평균 구하기',
      description: `주어진 정수 배열의 평균을 계산하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {5, 3, 8, 1, 2};
      int sum = 0;
      for (int num : numbers) {
        sum += num;
      }
      double average = (double) sum / numbers.length;
      System.out.println(average); // 3.8
    }
  }`,
    },
    {
      id: 4,
      title: '배열에서 특정 요소 찾기',
      description: `주어진 배열에서 특정 요소를 찾는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {5, 3, 8, 1, 2};
      int target = 8;
      boolean found = false;
      for (int num : numbers) {
        if (num == target) {
          found = true;
          break;
        }
      }
      System.out.println(found); // true
    }
  }`,
    },
    {
      id: 5,
      title: '배열의 모든 요소 출력하기',
      description: `주어진 배열의 모든 요소를 출력하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {5, 3, 8, 1, 2};
      for (int num : numbers) {
        System.out.println(num);
      }
    }
  }`,
    },
    {
      id: 6,
      title: '배열의 요소를 반전하기',
      description: `주어진 배열의 요소를 반전하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {5, 3, 8, 1, 2};
      for (int i = 0; i < numbers.length / 2; i++) {
        int temp = numbers[i];
        numbers[i] = numbers[numbers.length - 1 - i];
        numbers[numbers.length - 1 - i] = temp;
      }
      System.out.println(Arrays.toString(numbers)); // [2, 1, 8, 3, 5]
    }
  }`,
    },
    {
      id: 7,
      title: '배열의 중복 요소 제거하기',
      description: `주어진 배열에서 중복된 요소를 제거하는 메서드를 작성하세요.`,
      code: `import java.util.HashSet;
  
  public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {5, 3, 8, 1, 2, 3, 5};
      HashSet<Integer> set = new HashSet<>();
      for (int num : numbers) {
        set.add(num);
      }
      System.out.println(set); // [1, 2, 3, 5, 8]
    }
  }`,
    },
    {
      id: 8,
      title: '배열에서 두 요소의 합 구하기',
      description: `주어진 배열에서 두 요소의 합이 특정 값과 일치하는지 확인하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {2, 7, 11, 15};
      int target = 9;
      boolean found = false;
      for (int i = 0; i < numbers.length; i++) {
        for (int j = i + 1; j < numbers.length; j++) {
          if (numbers[i] + numbers[j] == target) {
            found = true;
            break;
          }
        }
      }
      System.out.println(found); // true
    }
  }`,
    },
    {
      id: 9,
      title: '배열의 요소를 정수로 변환하기',
      description: `주어진 문자열 배열의 요소를 정수로 변환하여 새로운 배열을 생성하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      String[] strNumbers = {"1", "2", "3"};
      int[] numbers = new int[strNumbers.length];
      for (int i = 0; i < strNumbers.length; i++) {
        numbers[i] = Integer.parseInt(strNumbers[i]);
      }
      System.out.println(Arrays.toString(numbers)); // [1, 2, 3]
    }
  }`,
    },
    {
      id: 10,
      title: '배열의 요소를 문자열로 변환하기',
      description: `주어진 정수 배열의 요소를 문자열로 변환하여 새로운 배열을 생성하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3};
      String[] strNumbers = new String[numbers.length];
      for (int i = 0; i < numbers.length; i++) {
        strNumbers[i] = String.valueOf(numbers[i]);
      }
      System.out.println(Arrays.toString(strNumbers)); // ["1", "2", "3"]
    }
  }`,
    },
    {
      id: 11,
      title: '배열의 요소를 특정 값으로 초기화하기',
      description: `주어진 배열의 모든 요소를 특정 값으로 초기화하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = new int[5];
      Arrays.fill(numbers, 0);
      System.out.println(Arrays.toString(numbers)); // [0, 0, 0, 0, 0]
    }
  }`,
    },
    {
      id: 12,
      title: '배열의 모든 요소를 제곱하기',
      description: `주어진 배열의 모든 요소를 제곱하여 새로운 배열을 반환하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4, 5};
      int[] squared = new int[numbers.length];
      for (int i = 0; i < numbers.length; i++) {
        squared[i] = numbers[i] * numbers[i];
      }
      System.out.println(Arrays.toString(squared)); // [1, 4, 9, 16, 25]
    }
  }`,
    },
    {
      id: 13,
      title: '배열에서 두 배열의 합집합 구하기',
      description: `두 배열의 합집합을 구하는 메서드를 작성하세요.`,
      code: `import java.util.HashSet;
  
  public class MyClass {
    public static void main(String[] args) {
      int[] arr1 = {1, 2, 3};
      int[] arr2 = {3, 4, 5};
      HashSet<Integer> set = new HashSet<>();
      for (int num : arr1) {
        set.add(num);
      }
      for (int num : arr2) {
        set.add(num);
      }
      System.out.println(set); // [1, 2, 3, 4, 5]
    }
  }`,
    },
    {
      id: 14,
      title: '배열에서 두 배열의 교집합 구하기',
      description: `두 배열의 교집합을 구하는 메서드를 작성하세요.`,
      code: `import java.util.ArrayList;
  import java.util.List;
  
  public class MyClass {
    public static void main(String[] args) {
      int[] arr1 = {1, 2, 3};
      int[] arr2 = {2, 3, 4};
      List<Integer> intersection = new ArrayList<>();
      for (int num1 : arr1) {
        for (int num2 : arr2) {
          if (num1 == num2) {
            intersection.add(num1);
          }
        }
      }
      System.out.println(intersection); // [2, 3]
    }
  }`,
    },
    {
      id: 15,
      title: '배열의 각 요소를 N으로 곱하기',
      description: `주어진 배열의 각 요소를 N으로 곱한 새로운 배열을 반환하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4};
      int N = 3;
      int[] multiplied = new int[numbers.length];
      for (int i = 0; i < numbers.length; i++) {
        multiplied[i] = numbers[i] * N;
      }
      System.out.println(Arrays.toString(multiplied)); // [3, 6, 9, 12]
    }
  }`,
    },
    {
      id: 16,
      title: '배열의 두 요소 스와프하기',
      description: `주어진 배열에서 두 인덱스의 요소를 스와프하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4};
      int index1 = 1;
      int index2 = 2;
      int temp = numbers[index1];
      numbers[index1] = numbers[index2];
      numbers[index2] = temp;
      System.out.println(Arrays.toString(numbers)); // [1, 3, 2, 4]
    }
  }`,
    },
    {
      id: 17,
      title: '배열의 회전',
      description: `주어진 배열을 오른쪽으로 K만큼 회전하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4, 5};
      int K = 2;
      int n = numbers.length;
      int[] rotated = new int[n];
      for (int i = 0; i < n; i++) {
        rotated[(i + K) % n] = numbers[i];
      }
      System.out.println(Arrays.toString(rotated)); // [4, 5, 1, 2, 3]
    }
  }`,
    },
    {
      id: 18,
      title: '배열의 부분 배열 찾기',
      description: `주어진 배열에서 특정 인덱스부터 시작하는 부분 배열을 반환하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4, 5};
      int startIndex = 2;
      int[] subArray = Arrays.copyOfRange(numbers, startIndex, numbers.length);
      System.out.println(Arrays.toString(subArray)); // [3, 4, 5]
    }
  }`,
    },
    {
      id: 19,
      title: '배열의 중간 값 찾기',
      description: `주어진 배열의 중간 값을 찾는 메서드를 작성하세요. 배열의 길이가 짝수일 경우 두 중간 값의 평균을 반환합니다.`,
      code: `import java.util.Arrays;
  
  public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {5, 3, 8, 1, 2};
      Arrays.sort(numbers);
      double median;
      if (numbers.length % 2 == 0) {
        median = (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2.0;
      } else {
        median = numbers[numbers.length / 2];
      }
      System.out.println(median); // 3.0
    }
  }`,
    },
    {
      id: 20,
      title: '배열의 합 구하기',
      description: `주어진 배열의 모든 요소의 합을 구하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4, 5};
      int sum = 0;
      for (int num : numbers) {
        sum += num;
      }
      System.out.println(sum); // 15
    }
  }`,
    },
    {
      id: 21,
      title: '배열의 곱 구하기',
      description: `주어진 배열의 모든 요소의 곱을 구하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4, 5};
      int product = 1;
      for (int num : numbers) {
        product *= num;
      }
      System.out.println(product); // 120
    }
  }`,
    },
    {
      id: 22,
      title: '배열에서 짝수와 홀수 분리하기',
      description: `주어진 배열에서 짝수와 홀수를 분리하는 메서드를 작성하세요.`,
      code: `import java.util.ArrayList;
  import java.util.List;
  
  public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4, 5, 6};
      List<Integer> evens = new ArrayList<>();
      List<Integer> odds = new ArrayList<>();
      for (int num : numbers) {
        if (num % 2 == 0) {
          evens.add(num);
        } else {
          odds.add(num);
        }
      }
      System.out.println("Evens: " + evens); // [2, 4, 6]
      System.out.println("Odds: " + odds); // [1, 3, 5]
    }
  }`,
    },
    {
      id: 23,
      title: '배열에서 최소값과 최대값 찾기',
      description: `주어진 배열에서 최소값과 최대값을 찾는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {5, 3, 8, 1, 2};
      int min = numbers[0];
      int max = numbers[0];
      for (int num : numbers) {
        if (num < min) {
          min = num;
        }
        if (num > max) {
          max = num;
        }
      }
      System.out.println("Min: " + min); // 1
      System.out.println("Max: " + max); // 8
    }
  }`,
    },
    {
      id: 24,
      title: '배열의 두 개의 최대값 찾기',
      description: `주어진 배열에서 두 개의 최대값을 찾는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {5, 3, 8, 1, 2};
      int max1 = Integer.MIN_VALUE;
      int max2 = Integer.MIN_VALUE;
      for (int num : numbers) {
        if (num > max1) {
          max2 = max1;
          max1 = num;
        } else if (num > max2) {
          max2 = num;
        }
      }
      System.out.println("Max1: " + max1); // 8
      System.out.println("Max2: " + max2); // 5
    }
  }`,
    },
    {
      id: 25,
      title: '배열의 모든 요소를 더한 후 정렬하기',
      description: `주어진 배열의 모든 요소를 더한 후 그 결과를 정렬하는 메서드를 작성하세요.`,
      code: `import java.util.Arrays;
  
  public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {5, 3, 8, 1, 2};
      int sum = 0;
      for (int num : numbers) {
        sum += num;
      }
      int[] result = {sum};
      Arrays.sort(result);
      System.out.println(Arrays.toString(result)); // [19]
    }
  }`,
    },
    {
      id: 26,
      title: '배열의 모든 요소를 역순으로 정렬하기',
      description: `주어진 배열의 모든 요소를 역순으로 정렬하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {5, 3, 8, 1, 2};
      Arrays.sort(numbers);
      for (int i = 0; i < numbers.length / 2; i++) {
        int temp = numbers[i];
        numbers[i] = numbers[numbers.length - 1 - i];
        numbers[numbers.length - 1 - i] = temp;
      }
      System.out.println(Arrays.toString(numbers)); // [8, 5, 3, 2, 1]
    }
  }`,
    },
    {
      id: 27,
      title: '배열의 각 요소에 특정 값 추가하기',
      description: `주어진 배열의 각 요소에 특정 값을 더한 새로운 배열을 반환하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4};
      int valueToAdd = 5;
      int[] added = new int[numbers.length];
      for (int i = 0; i < numbers.length; i++) {
        added[i] = numbers[i] + valueToAdd;
      }
      System.out.println(Arrays.toString(added)); // [6, 7, 8, 9]
    }
  }`,
    },
    {
      id: 28,
      title: '배열에서 N보다 큰 값의 개수 세기',
      description: `주어진 배열에서 N보다 큰 값의 개수를 세는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4, 5};
      int N = 3;
      int count = 0;
      for (int num : numbers) {
        if (num > N) {
          count++;
        }
      }
      System.out.println(count); // 2
    }
  }`,
    },
    {
      id: 29,
      title: '배열에서 두 수의 합 찾기',
      description: `주어진 배열에서 두 수의 합이 특정 값이 되는 두 수를 찾는 메서드를 작성하세요.`,
      code: `import java.util.HashMap;
  
  public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {2, 7, 11, 15};
      int target = 9;
      HashMap<Integer, Integer> map = new HashMap<>();
      for (int i = 0; i < numbers.length; i++) {
        int complement = target - numbers[i];
        if (map.containsKey(complement)) {
          System.out.println("Index1: " + map.get(complement) + ", Index2: " + i); // Index1: 0, Index2: 1
        }
        map.put(numbers[i], i);
      }
    }
  }`,
    },
    {
      id: 30,
      title: '주어진 배열의 문자열 형태 반환',
      description: `주어진 정수 배열을 문자열 형태로 반환하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4, 5};
      StringBuilder result = new StringBuilder("[");
      for (int i = 0; i < numbers.length; i++) {
        result.append(numbers[i]);
        if (i < numbers.length - 1) {
          result.append(", ");
        }
      }
      result.append("]");
      System.out.println(result.toString()); // [1, 2, 3, 4, 5]
    }
  }`,
    },
    {
      id: 31,
      title: '배열에서 중복된 값 찾기',
      description: `주어진 배열에서 중복된 값을 찾는 메서드를 작성하세요.`,
      code: `import java.util.HashSet;
  
  public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 1, 2, 4};
      HashSet<Integer> duplicates = new HashSet<>();
      HashSet<Integer> seen = new HashSet<>();
      for (int num : numbers) {
        if (!seen.add(num)) {
          duplicates.add(num);
        }
      }
      System.out.println(duplicates); // [1, 2]
    }
  }`,
    },
    {
      id: 32,
      title: '배열에서 N의 개수 세기',
      description: `주어진 배열에서 특정 값 N의 개수를 세는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 1, 2, 4};
      int N = 1;
      int count = 0;
      for (int num : numbers) {
        if (num == N) {
          count++;
        }
      }
      System.out.println(count); // 2
    }
  }`,
    },
    {
      id: 33,
      title: '배열을 문자열로 변환 후 정렬하기',
      description: `주어진 정수 배열을 문자열로 변환한 후 정렬하는 메서드를 작성하세요.`,
      code: `import java.util.Arrays;
  
  public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {5, 3, 8, 1, 2};
      String[] stringArray = Arrays.stream(numbers)
                                    .mapToObj(String::valueOf)
                                    .toArray(String[]::new);
      Arrays.sort(stringArray);
      System.out.println(Arrays.toString(stringArray)); // [1, 2, 3, 5, 8]
    }
  }`,
    },
    {
      id: 34,
      title: '배열에서 연속된 최대 합 찾기',
      description: `주어진 배열에서 연속된 요소들의 최대 합을 찾는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
      int maxSum = numbers[0];
      int currentSum = 0;
      for (int num : numbers) {
        currentSum += num;
        maxSum = Math.max(maxSum, currentSum);
        if (currentSum < 0) {
          currentSum = 0;
        }
      }
      System.out.println(maxSum); // 6
    }
  }`,
    },
    {
      id: 35,
      title: '배열의 홀수 위치에 있는 값의 합 구하기',
      description: `주어진 배열에서 홀수 위치에 있는 값들의 합을 구하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4, 5};
      int sum = 0;
      for (int i = 1; i < numbers.length; i += 2) {
        sum += numbers[i];
      }
      System.out.println(sum); // 6
    }
  }`,
    },
    {
      id: 36,
      title: '배열의 짝수 위치에 있는 값의 합 구하기',
      description: `주어진 배열에서 짝수 위치에 있는 값들의 합을 구하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4, 5};
      int sum = 0;
      for (int i = 0; i < numbers.length; i += 2) {
        sum += numbers[i];
      }
      System.out.println(sum); // 9
    }
  }`,
    },
    {
      id: 37,
      title: '배열의 각 요소에 제곱을 적용하기',
      description: `주어진 배열의 각 요소에 제곱을 적용한 새로운 배열을 반환하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4};
      int[] squared = new int[numbers.length];
      for (int i = 0; i < numbers.length; i++) {
        squared[i] = numbers[i] * numbers[i];
      }
      System.out.println(Arrays.toString(squared)); // [1, 4, 9, 16]
    }
  }`,
    },
    {
      id: 38,
      title: '배열의 각 요소에 N의 제곱을 곱하기',
      description: `주어진 배열의 각 요소에 N의 제곱을 곱한 새로운 배열을 반환하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4};
      int N = 3;
      int[] multiplied = new int[numbers.length];
      for (int i = 0; i < numbers.length; i++) {
        multiplied[i] = numbers[i] * (N * N);
      }
      System.out.println(Arrays.toString(multiplied)); // [9, 18, 27, 36]
    }
  }`,
    },
    {
      id: 39,
      title: '주어진 숫자로 배열 초기화하기',
      description: `주어진 숫자로 길이 N의 배열을 초기화하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int N = 5;
      int value = 7;
      int[] array = new int[N];
      Arrays.fill(array, value);
      System.out.println(Arrays.toString(array)); // [7, 7, 7, 7, 7]
    }
  }`,
    },
    {
      id: 40,
      title: '배열에서 특정 값 찾기',
      description: `주어진 배열에서 특정 값을 찾는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4, 5};
      int valueToFind = 3;
      boolean found = false;
      for (int num : numbers) {
        if (num == valueToFind) {
          found = true;
          break;
        }
      }
      System.out.println(found ? "Found" : "Not Found"); // Found
    }
  }`,
    },
    {
      id: 41,
      title: '배열에서 최대값과 최소값 찾기',
      description: `주어진 배열에서 최대값과 최소값을 찾는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4, 5};
      int min = numbers[0];
      int max = numbers[0];
      for (int num : numbers) {
        if (num < min) {
          min = num;
        }
        if (num > max) {
          max = num;
        }
      }
      System.out.println("Min: " + min + ", Max: " + max); // Min: 1, Max: 5
    }
  }`,
    },
    {
      id: 42,
      title: '2차원 배열의 요소 합 구하기',
      description: `주어진 2차원 배열의 모든 요소의 합을 구하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[][] numbers = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
      };
      int sum = 0;
      for (int[] row : numbers) {
        for (int num : row) {
          sum += num;
        }
      }
      System.out.println(sum); // 45
    }
  }`,
    },
    {
      id: 43,
      title: '2차원 배열에서 특정 값 찾기',
      description: `주어진 2차원 배열에서 특정 값을 찾는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[][] numbers = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
      };
      int valueToFind = 5;
      boolean found = false;
      for (int i = 0; i < numbers.length; i++) {
        for (int j = 0; j < numbers[i].length; j++) {
          if (numbers[i][j] == valueToFind) {
            found = true;
            break;
          }
        }
      }
      System.out.println(found ? "Found" : "Not Found"); // Found
    }
  }`,
    },
    {
      id: 44,
      title: '2차원 배열의 행과 열 크기 출력하기',
      description: `주어진 2차원 배열의 행과 열의 크기를 출력하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[][] numbers = {
        {1, 2, 3},
        {4, 5, 6}
      };
      int rows = numbers.length;
      int cols = numbers[0].length;
      System.out.println("Rows: " + rows + ", Columns: " + cols); // Rows: 2, Columns: 3
    }
  }`,
    },
    {
      id: 45,
      title: '2차원 배열의 특정 행 출력하기',
      description: `주어진 2차원 배열에서 특정 행을 출력하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[][] numbers = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
      };
      int rowToPrint = 1;
      for (int num : numbers[rowToPrint]) {
        System.out.print(num + " ");
      }
      // 4 5 6
    }
  }`,
    },
    {
      id: 46,
      title: '2차원 배열의 특정 열 출력하기',
      description: `주어진 2차원 배열에서 특정 열을 출력하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[][] numbers = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
      };
      int colToPrint = 2;
      for (int[] row : numbers) {
        System.out.print(row[colToPrint] + " ");
      }
      // 3 6 9
    }
  }`,
    },
    {
      id: 47,
      title: '2차원 배열의 각 요소에 N을 곱하기',
      description: `주어진 2차원 배열의 각 요소에 N을 곱한 새로운 2차원 배열을 반환하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[][] numbers = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
      };
      int N = 2;
      int[][] multiplied = new int[numbers.length][numbers[0].length];
      for (int i = 0; i < numbers.length; i++) {
        for (int j = 0; j < numbers[i].length; j++) {
          multiplied[i][j] = numbers[i][j] * N;
        }
      }
      System.out.println(Arrays.deepToString(multiplied)); // [[2, 4, 6], [8, 10, 12], [14, 16, 18]]
    }
  }`,
    },
    {
      id: 48,
      title: '주어진 2차원 배열의 대각선 요소 출력하기',
      description: `주어진 2차원 배열의 대각선 요소를 출력하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      int[][] numbers = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
      };
      for (int i = 0; i < numbers.length; i++) {
        System.out.print(numbers[i][i] + " ");
      }
      // 1 5 9
    }
  }`,
    },
    {
      id: 49,
      title: '주어진 문자열을 배열로 변환하기',
      description: `주어진 문자열을 특정 구분자로 나누어 배열로 변환하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      String str = "apple,banana,cherry";
      String[] array = str.split(",");
      System.out.println(Arrays.toString(array)); // [apple, banana, cherry]
    }
  }`,
    },
    {
      id: 50,
      title: '주어진 배열을 문자열로 변환하기',
      description: `주어진 배열을 문자열로 변환하는 메서드를 작성하세요.`,
      code: `public class MyClass {
    public static void main(String[] args) {
      String[] array = {"apple", "banana", "cherry"};
      String result = String.join(", ", array);
      System.out.println(result); // apple, banana, cherry
    }
  }`,
    },
  ];