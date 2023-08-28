let days_output = document.querySelector(".days span");
let months_output = document.querySelector(".months span");
let years_output = document.querySelector(".years span");

let days_input = document.querySelector("#day");
let months_input = document.querySelector("#month");
let years_input = document.querySelector("#year");

let calculate_btn = document.querySelector(".calc-button");

calculate_btn.addEventListener("click", CalculateAge);

function CalculateAge() {
    //works, but needs serious refactoring or another solution
    let current_date = new Date();
    let month_current = current_date.getMonth() + 1;
    let year_current = current_date.getFullYear();
    let day_current = current_date.getDate();

    let year_birth = years_input.value;
    let month_birth = months_input.value;
    let day_birth = days_input.value;

    let years_lived;
    let months_lived;
    let daysBirthMonth = new Date(0, months_input.value, 0).getDate();
    let days_lived;

    if (month_current > month_birth) {
        if (day_birth > day_current) {
            years_lived = year_current - year_birth;
            years_output.innerText = years_lived;

            months_lived = month_current - month_birth - 1;
            months_output.innerText = months_lived;

            days_lived = daysBirthMonth - day_birth + day_current;
            days_output.innerText = days_lived;

            if (months_input.value == 2) {
                days_lived = daysBirthMonth - day_birth + day_current + 3;
                days_output.innerText = days_lived;
            }
        } else if (day_birth < day_current) {
            years_lived = year_current - year_birth;
            years_output.innerText = years_lived;

            months_lived = month_current - month_birth;
            months_output.innerText = months_lived;

            days_lived = day_current - day_birth;
            days_output.innerText = days_lived;
        } else if (day_birth == day_current) {
            days_output.innerText = 0;

            months_lived = month_current - month_birth;
            months_output.innerText = months_lived;

            years_lived = year_current - year_birth;
            years_output.innerText = years_lived;
        }
    }

    //////////////////////////////////

    if (month_current < month_birth) {
        if (day_birth > day_current) {
            years_lived = year_current - year_birth - 1;
            years_output.innerText = years_lived;

            months_lived = 12 - month_birth + month_current - 1;
            months_output.innerText = months_lived;

            days_lived = daysBirthMonth - day_birth + day_current;
            days_output.innerText = days_lived;
        } else if (day_birth < day_current) {
            years_lived = year_current - year_birth - 1;
            years_output.innerText = years_lived;

            months_lived = 12 - month_birth + month_current;
            months_output.innerText = months_lived;

            days_lived = day_current - day_birth;
            days_output.innerText = days_lived;
        } else if (day_birth == day_current) {
            days_output.innerText = 0;

            months_lived = 12 - month_birth + month_current;
            months_output.innerText = months_lived;

            years_lived = year_current - year_birth - 1;
            years_output.innerText = years_lived;
        }
    }

    /////////////////////////////////

    if (month_current == month_birth) {
        if (day_birth < day_current) {
            years_lived = year_current - year_birth;
            years_output.innerText = years_lived;

            months_output.innerText = 0;

            days_lived = day_current - day_birth;
            days_output.innerText = days_lived;
        } else if (day_birth > day_current) {
            years_lived = year_current - year_birth - 1;
            years_output.innerText = years_lived;

            months_lived = 12 - month_birth + month_current - 1;
            months_output.innerText = months_lived;

            days_lived = daysBirthMonth - day_birth + day_current;
            days_output.innerText = days_lived;
        } else if (day_birth == day_current) {
            years_lived = year_current - year_birth;
            years_output.innerText = years_lived;

            months_output.innerText = 0;

            days_output.innerText = 0;
        }
    }

    //////////////////////////////////

    if (year_current == year_birth && month_current == month_birth) {
        years_output.innerText = 0;
        months_output.innerText = 0;
        days_lived = day_current - day_birth;
        days_output.innerText = days_lived;
    } else if (year_current == year_birth) {
        years_output.innerText = 0;

        if (day_birth > day_current) {
            months_lived = month_current - month_birth - 1;
            months_output.innerText = months_lived;

            days_lived = daysBirthMonth - day_birth + day_current;
        } else if (day_birth < day_current) {
            months_lived = month_current - month_birth;
            months_output.innerText = months_lived;

            days_lived = daysBirthMonth - day_birth + day_current;
        }
    }
}
