
let a = +prompt("Nhập số lượng số nguyên tố");
if ((!Number.isInteger(a)) || ((Number.isInteger(a))&& a<1)){
    alert("Xin nhap lai so")
}
else if ((Number.isInteger(a) && a==1)){
    document.write('2');
}
else {   
    let n = 1;
    let count = 0;
    while (count <= a) {
        let i = 2;
        let flag = true;
        if (n == 2) {
            document.write(n + ", ")
            count++;
        } else if (n > 2) {
            while (i < n) {
                if (n % i == 0) {
                    flag = false;
                    break;
                }
                i++;
            }
            if (flag === true) {
                document.write(n + ", ")
                count++;
            }
        }
        n++;
    }
}



