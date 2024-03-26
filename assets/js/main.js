// bai 1

let repeatString = (str) => {
    let result = "";

    for (let i = 0; i < 10; i++) {
        result += str;
    }

    return result;
}

let chuoiNhap = ("b");
let ketQua = repeatString(chuoiNhap);
console.log(ketQua);


// bai 2

let repeatString1 = (str) => {
    let result = "";

    for (let i = 0; i < 10; i++) {
        if (i < 9) {
            result += str + "-";
        } else {
            result += str;
        }
    }

    return result;
}

let chuoiNhap1 = ("c");
let ketQua1 = repeatString1(chuoiNhap1);
console.log(ketQua1);

// bai 3

let repeatString3 = (str, n) => {
    if (n <= 1) {
        return str;
    }
    let result = "";
    for (let i = 0; i < n; i++) {
        if (i < n - 1) {
            result += str + "-";
        } else {
            result += str;
        }
    }
    return result;
}


let chuoiNhap3 = ("dao");
let soLan3 = (4);
let ketQua3 = repeatString3(chuoiNhap3, soLan3);
console.log(ketQua3);

// bai 4

let tongSoChiaHetCho5 = () => {
    let tong = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 5 === 0) {
            tong += i;
        }
    }
    return tong; 
}
let ketQua4 = tongSoChiaHetCho5();
console.log("Tổng các số chia hết cho 5 từ 0 đến 100 là: " + ketQua4);

// bai 5

let tinhTheTichHinhCau = (banKinh) => {
    const PI = Math.PI;
    let theTich = (4 / 3) * PI * Math.pow(banKinh, 3);
    return theTich;
}
let banKinh = (5);
let theTich = tinhTheTichHinhCau(banKinh);
console.log("Thể tích của hình cầu là: " + theTich.toFixed(2));

// bai 6

let tinhTongSoGiua = (a, b) => {
    let tong = 0;
    let min = Math.min(a, b);
    let max = Math.max(a, b);

    for (let i = min + 1; i < max; i++) {
        tong += i;
    }
    return tong;
}

let so1 = (1);
let so2 = (40);
let ketQua6 = tinhTongSoGiua(so1, so2);
console.log("Tổng các số nguyên nằm giữa " + so1 + " và " + so2 + " là: " + ketQua6);

// bai 7

let laSoNguyenTo = (number) => {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

let soCanKiemTra = (5);
let ketQua7 = laSoNguyenTo(soCanKiemTra);
console.log("Số " + soCanKiemTra + " " + (ketQua7 ? "là" : "không là") + " số nguyên tố.");

// bai 8

let tinhTongSoNguyenTo = (n) => {
    let tong8 = 0;
    let laSoNguyenTo = (number) => {
        if (number <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = 2; i <= n; i++) {
        if (laSoNguyenTo(i)) {
            tong8 += i;
        }
    }

    return tong8;
}

let soNhap8 = (5);
let tong8 = tinhTongSoNguyenTo(soNhap8);
console.log("Tổng các số nguyên tố nhỏ hơn hoặc bằng " + soNhap8 + " là: " + tong8);

// bai 9

let tinhTongUocSo = (so) => {
    let tong = 0;
    for (let i = 1; i <= so / 2; i++) {
        if (so % i === 0) {
            tong += i; 
        }
    }
    tong += so;

    return tong;
}

let soNhap = (8);
let tongUocSo = tinhTongUocSo(soNhap);
console.log("Tổng các ước số của " + soNhap + " là: " + tongUocSo);


