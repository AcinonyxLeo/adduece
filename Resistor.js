
$(document).ready(function(){
    
    $('div.band, img.picture').hide();
    $('img.picture.ban3').show();

    var demovalue = 0

    $('#selection').on('change', function(){
        demovalue = $(this).val();
        $('div.band, img.picture').hide();
        $('div.band.ban' + demovalue).show();
        $('img.picture.ban' + demovalue).show();

        $('#1stBand').prop('selectedIndex', 0);
        $('#2ndBand').prop('selectedIndex', 0);
        $('#3rdBand').prop('selectedIndex', 0);
        $('#multi').prop('selectedIndex', 0);
        $('#tole').prop('selectedIndex', 0);
        $('#temp').prop('selectedIndex', 0);
        $('#resistorvalue').empty();
        $('#tolerancevalue').empty();
        $('#temperaturevalue').empty();
    });

    function Calculate(first, second, third, multiplier){
        if (demovalue <=4){
            resistor = (first+second)*multiplier
            return resistor   
        } else {
        resistor = (first+second+third)*multiplier
        return resistor       
        }
    }

    $('#calculate').click(function(){

        var first = $('#1stBand').val();
        var second = $('#2ndBand').val();
        var third = $('#3rdBand').val();
        var multiplier = $('#multi').val();
        var tolerance = $('#tole').val();
        var temperature = $('#temp').val();

        calculated = Calculate(first,second,third,multiplier,tolerance,temperature);
        $('#resistorvalue').text("Resistor: " + calculated + " ohms");
        $('#tolerancevalue').text("Tolerance: " + tolerance);
        $('#temperaturevalue').text("Temperature Coefficient: " + temperature);

    });
})