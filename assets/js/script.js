

$('button').click( ( ) => {
    let mass = $('#mass').val();
    let height = $('height').val();
    const bmi = mass / Math.pow(height,2)
    if (bmi<18.5) {
    $('#bmi').html(bmi + ':underweight');
    } else if (bmi<25) {
    $('#bmi').html(bmi + ':healthy weight');
    }else if (bmi<30) {
    $('#bmi').html(bmi + ':above ideal range');
    }else {
    $('#bmi').html(bmi + ':obese');
}
)}
