const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById("value");
    let description = ""

    value.classList.add("atention");


    document.getElementById("infos").classList.remove("hidden");

    if (bmi < 18.5) {
        description = "Cuidado! Abaixo do peso";
    } else if (bmi >= 18.5 && bmi < 25) {
        description = "Parabéns! Você está no peso ideal";
        value.classList.remove("atention");
        value.classList.add("normal");
    } else if (bmi >= 25 && bmi < 30) {
        description = "Cuidado! Levemente acima do peso";
    } else if (bmi >= 30 && bmi < 35) {
        description = "Alerta! Obesidade grau I";
    } else if (bmi >= 35 && bmi < 40) {
        description = "Alerta! Obesidade grau II";
    } else {
        description = "Alerta! Obesidade grau III";
    }

    value.textContent = bmi.replace(".", ",");
    document.getElementById("description").textContent = description;
}); 