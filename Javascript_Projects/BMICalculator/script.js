const btn = document.getElementById("button");
btn.addEventListener('click', () => {
    let height = document.getElementById('height').value
    let width = document.getElementById('weight').value
    if (height == '' || width == '') {
        alert("Please fill the required fields")
        return;
    }
    height = height / 100;
    let BMI = (width / (height * height))
    BMI = BMI.toFixed(2)
    document.querySelector(".answer").innerHTML = BMI
    let status = ''
    if (BMI < 18.5) {
        status = "Under Weight"
    }
    if (BMI >= 18.5 && BMI < 25) {
        status = "Healthy"
    }
    if (BMI >= 25 && BMI < 30) {
        status = "Overweight"
    }
    if (BMI >= 30) {
        status = "Obese"
    }
    document.querySelector(".comment").innerHTML = `You are : <span class="comment">${status}</span>`
})
