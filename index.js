const accordions = document.querySelectorAll(".accordion-item");
const btnHead = document.querySelector(".head-btn");
const textHead = document.querySelector(".head-text");
const text1 = document.querySelector(".accordion-text-1");
const text2 = document.querySelector(".accordion-text-2");
const text3 = document.querySelector(".accordion-text-3");
const text4 = document.querySelector(".accordion-text-4");
const text5 = document.querySelector(".accordion-text-5");
const text6 = document.querySelector(".accordion-text-6");
const text7 = document.querySelector(".accordion-text-7");
const text8 = document.querySelector(".accordion-text-8");
const text9 = document.querySelector(".accordion-text-9-2");
const text10 = document.querySelector(".accordion-text-10");

let arrNumber = [];

accordions.forEach((accordion) => {
  accordion.onclick = () => {
    if (document.querySelector(".accordion-item.active")) {
      document
        .querySelector(".accordion-item.active")
        .classList.remove("active");
    }
    accordion.classList.add("active");
  };
});

btnHead.onclick = () => {
  let check = document.querySelector(".head input").value;
  if (checkInput(check)) {
    const inputHead = document.querySelector(".head input").value * 1;
    arrNumber.push(inputHead);
    textHead.innerText = "👉Mảng của bạn là: " + arrNumber.join(",");
    clearInput();
  }

  // Hàm tính toán khi click button
  handleEvent(arrNumber);
};

let arrInteger = [];
document.querySelector(".btn-9-1").onclick = () => {
  let check = document.querySelector(".input-9").value;
  if (checkInput(check)) {
    let inputInterger = document.querySelector(".input-9").value * 1;
    arrInteger.push(inputInterger);
    document.querySelector(".accordion-text-9-1").innerText =
      "👉Mảng của bạn là: " + arrInteger.join(",");
    document.querySelector(".input-9").value = "";
  }

  // Button BT 9
  document.querySelector(".btn-9-2").onclick = () => {
    let result = countIntegers(arrInteger);
    text9.innerText = "Kết quả: " + result;
  };
};

function handleEvent(arrNumber) {
  // Button Bt 1
  document.querySelector(".btn-1").onclick = () => {
    let result = sum(arrNumber);
    text1.innerText = "Kết quả: " + result;
  };

  // Button BT 2
  document.querySelector(".btn-2").onclick = () => {
    let result = findPositive(arrNumber);
    text2.innerText = "Kết quả: " + result;
  };

  // Button BT 3
  document.querySelector(".btn-3").onclick = () => {
    let result = findSmallest(arrNumber);
    text3.innerText = "Kết quả: " + result;
  };

  // Button BT 4
  document.querySelector(".btn-4").onclick = () => {
    let result = findSmallestPositive(arrNumber);
    if (result) {
      text4.innerText = "Kết quả: " + result;
    } else {
      text4.innerText = "Không có số dương";
    }
  };

  // Button BT 5
  document.querySelector(".btn-5").onclick = () => {
    let result = findEvenNumber(arrNumber);
    text5.innerText = "Kết quả: " + result;
  };

  // Button BT 6
  document.querySelector(".btn-6").onclick = () => {
    let index1 = document.querySelector(".input-6-1").value * 1 - 1;
    let index2 = document.querySelector(".input-6-2").value * 1 - 1;
    let result = changePlaces(arrNumber, index1, index2);

    if (result) {
      text6.innerText = "Kết quả: " + result;
    }
  };

  // Button BT 7
  document.querySelector(".btn-7").onclick = () => {
    let result = sortNumber(arrNumber);
    text7.innerText = "Kết quả: " + result;
  };

  // Button BT 8
  document.querySelector(".btn-8").onclick = () => {
    let result = findFirstPrime(arrNumber);
    if (result) {
      text8.innerText = "Kết quả: " + result;
    } else {
      text8.innerText = "Không tìm thấy số nguyên tố";
    }
  };

  // Button BT 10
  document.querySelector(".btn-10").onclick = () => {
    let result = compareNumber(arrNumber);
    text10.innerText = "Kết quả: " + result;
  };
}

function sum(arr) {
  let sum = arr.reduce((total, current) => {
    if (current > 0) {
      return total + current;
    } else {
      return total;
    }
  }, 0);

  return sum;
}

function findPositive(arr) {
  let count = 0;
  for (let number of arr) {
    if (number > 0) {
      count++;
    }
  }
  return count;
}

function findSmallest(arr) {
  let smallNumber = arr[0];
  for (let number of arr) {
    if (smallNumber > number) {
      smallNumber = number;
    }
  }
  return smallNumber;
}

function findSmallestPositive(arr) {
  let smallNumber = undefined;

  for (let number of arr) {
    if (number > 0 && (smallNumber === undefined || number < smallNumber)) {
      smallNumber = number;
    }
  }
  return smallNumber;
}

function findEvenNumber(arr) {
  let evenNumber = 0;
  for (let number of arr) {
    if (number % 2 === 0) {
      evenNumber = number;
    }
  }
  return evenNumber;
}

function changePlaces(arr, index1, index2) {
  if (arr[index1] && arr[index2]) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

    return arr.join(",");
  } else {
    alert("Vị trí không tồn tại");
  }
}

function sortNumber(arr) {
  arr.sort((a, b) => a - b);
  return arr.join(",");
}

function findFirstPrime(arr) {
  for (let number of arr) {
    if (isPrime(number)) {
      return number;
    }
  }
  return undefined;
}

function countIntegers(arr) {
  let count = 0;

  for (let number of arr) {
    if (Number.isInteger(number)) {
      count++;
    }
  }

  return count;
}

// Kiểm tra xem có phải số nguyên tố
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function compareNumber(arr) {
  let nevCount = 0;
  let posCount = 0;

  for (let number of arr) {
    if (number < 0) {
      nevCount++;
    } else if (number > 0) {
      posCount++;
    }
  }

  if (nevCount > posCount) {
    return "Số âm > Số dương";
  } else if (posCount > nevCount) {
    return "Số dương > Số âm";
  } else {
    return "Số dương = Số âm";
  }
}

function clearInput() {
  document.querySelector(".head input").value = "";
}

function checkInput(input) {
  let isField = true;
  if (!input) {
    alert("Vui lòng nhập dữ liệu");
    isField = false;
  }
  return isField;
}
