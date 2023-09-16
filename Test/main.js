


function timsochinhphuong() {

    let a = parseInt(document.getElementById("soA").value);
    let b = parseInt(document.getElementById("soB").value);

    let results = [];
    for (let i = a; i <= b; i++) {
        let sqrt = Math.sqrt(i);
        if (sqrt === parseInt(sqrt)) {
            results.push(i);
        }
    }

    let result = document.getElementById("results");
    result.innerHTML = "Các số chính phương từ " + a + " đến " + b + " là: " + results.join(", ");
}