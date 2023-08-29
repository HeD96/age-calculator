let days_output = document.querySelector(".days span");
let months_output = document.querySelector(".months span");
let years_output = document.querySelector(".years span");

let days_input = document.querySelector("#day");
let months_input = document.querySelector("#month");
let years_input = document.querySelector("#year");

let calculate_btn = document.querySelector(".calc-button");

days_input.addEventListener("keyup", function () {
    Limiter.limitDays(days_input);
    Validator.daysValid(days_input);
});

months_input.addEventListener("keyup", function () {
    Limiter.limitMonths(months_input);
    Validator.monthsValid(months_input);
});

years_input.addEventListener("keyup", function () {
    Limiter.limitYears(years_input);
    Validator.yearsValid(years_input);
});

let Limiter = (function () {
    let maxChar = 2;
    let maxCharYear = 4;

    let limitDays = function (days) {
        if (days.value.length >= 3) {
            days.value = days.value.substring(0, maxChar);
        }
    };

    let limitMonths = function (months) {
        if (months.value.length >= 3) {
            months.value = months.value.substring(0, maxChar);
        }
    };

    let limitYears = function (years) {
        if (years.value.length >= 3) {
            years.value = years.value.substring(0, maxCharYear);
        }
    };

    return {
        limitDays,
        limitMonths,
        limitYears,
    };
})();

let Validator = (function () {
    let daysOK = false;
    let monthsOK = false;
    let yearsOK = false;

    let daysValid = function (days) {
        // if (
        //     months.value == 1 ||
        //     months.value == 3 ||
        //     months.value == 5 ||
        //     months.value == 7 ||
        //     months.value == 8 ||
        //     months.value == 10 ||
        //     months.value == 12
        // ) {
        //     if (days.value <= 31 && days.value > 0) {
        //         days.classList.add("valid");
        //         days.classList.remove("invalid");
        //         daysOK = true;
        //     } else if (days.value == "") {
        //         days.classList.remove("valid");
        //         days.classList.remove("invalid");
        //         daysOK = false;
        //     } else {
        //         days.classList.add("invalid");
        //         days.classList.remove("valid");
        //         daysOK = false;
        //     }
        // } else if (
        //     months.value == 4 ||
        //     months.value == 6 ||
        //     months.value == 9 ||
        //     months.value == 11
        // ) {
        //     if (days.value <= 30 && days.value > 0) {
        //         days.classList.add("valid");
        //         days.classList.remove("invalid");
        //         daysOK = true;
        //     } else if (days.value == "") {
        //         days.classList.remove("valid");
        //         days.classList.remove("invalid");
        //         daysOK = false;
        //     } else {
        //         days.classList.add("invalid");
        //         days.classList.remove("valid");
        //         daysOK = false;
        //     }
        // } else if (months.value == 2) {
        //     if (days.value <= 28 && days.value > 0) {
        //         days.classList.add("valid");
        //         days.classList.remove("invalid");
        //         daysOK = true;
        //     } else if (days.value == "") {
        //         days.classList.remove("valid");
        //         days.classList.remove("invalid");
        //         daysOK = false;
        //     } else {
        //         days.classList.add("invalid");
        //         days.classList.remove("valid");
        //         daysOK = false;
        //     }
        // }

        if (days.value <= 31 && days.value > 0) {
            days.classList.add("valid");
            days.classList.remove("invalid");
            daysOK = true;
        } else if (days.value == "") {
            days.classList.remove("valid");
            days.classList.remove("invalid");
            daysOK = false;
        } else {
            days.classList.add("invalid");
            days.classList.remove("valid");
            daysOK = false;
        }

        validateInput();
    };

    let monthsValid = function (months) {
        if (months.value <= 12 && months.value > 0) {
            months.classList.add("valid");
            months.classList.remove("invalid");
            monthsOK = true;
        } else if (months.value == "") {
            months.classList.remove("valid");
            months.classList.remove("invalid");
            monthsOK = false;
        } else {
            months.classList.add("invalid");
            months.classList.remove("valid");
            monthsOK = false;
        }

        validateInput();
    };

    let yearsValid = function (years) {
        if (years.value >= 1) {
            years.classList.add("valid");
            years.classList.remove("invalid");
            yearsOK = true;
        } else if (years.value == "") {
            years.classList.remove("valid");
            years.classList.remove("invalid");
            yearsOK = false;
        } else {
            years.classList.add("invalid");
            years.classList.remove("valid");
            yearsOK = false;
        }

        validateInput();
    };

    let validateInput = function () {
        if (daysOK === true && monthsOK === true && yearsOK === true) {
            calculate_btn.addEventListener("click", CalculateAge);
        }
    };

    return {
        daysValid,
        monthsValid,
        yearsValid,
    };
})();

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
