


function result() {

    let TotalMarks = document.getElementById("num1").value;
    let ObtainedMarks = document.getElementById("num2").value;

    let Percentage = (ObtainedMarks * 100) / TotalMarks

    document.getElementById("Tmarks").innerHTML = TotalMarks
    document.getElementById("Omarks").innerHTML = ObtainedMarks
    document.getElementById("Percentage").innerHTML = Percentage.toFixed(1)


    // let Percentage = TotalMarks > ObtainedMarks

    if (Percentage < 32) {

        document.getElementById("Grade").innerHTML = "F"
    } else if (Percentage == 33 || Percentage < 39) {
        document.getElementById("Grade").innerHTML = "E"
    } else if (Percentage == 40 || Percentage < 49) {
        document.getElementById("Grade").innerHTML = "D"
    } else if (Percentage == 50 || Percentage < 59) {
        document.getElementById("Grade").innerHTML = "C"
    } else if (Percentage == 60 || Percentage < 69) {
        document.getElementById("Grade").innerHTML = "B"
    } else if (Percentage == 70 || Percentage < 79) {
        document.getElementById("Grade").innerHTML = "A"
    } else if (Percentage == 80 || Percentage == 100) {
        document.getElementById("Grade").innerHTML = "A-1"


    }
    else if (Percentage > 100) {

        document.getElementById("null").innerHTML = "Obtained marks must be below than Total Marks to get Grade and Percentage"
        document.getElementById("Grade").innerHTML = ""
        document.getElementById("Percentage").innerHTML = ""




    }



}





