function calculate() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value / 100;
    var bmi = weight / height ** 2;
    if (bmi < 18.5)
        document.getElementById("bmiResult").innerText = "Underweight";
    else if (bmi >= 18.5 && bmi < 25)
        document.getElementById("bmiResult").innerText = "Normal weight";
    else if (bmi >= 25 && bmi < 30)
        document.getElementById("bmiResult").innerText = "Increased weight";
    else if (bmi >= 30 && bmi < 40)
        document.getElementById("bmiResult").innerText = "Obese";
    else document.getElementById("bmiResult").innerText = "Very high obese";
}