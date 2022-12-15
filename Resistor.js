
$(document).ready(function(){
    
    $('div.band, img.picture').hide();
    $('img.picture.ban3').show();

    $('#selection').on('change', function(){
        var bvalue = $(this).val();
        $('div.band, img.picture').hide();
        $('div.band.ban' + bvalue).show();
        $('img.picture.ban' + bvalue).show();
    });

    function Calculate(first, second, third, multiplier){
        resistor = (first+second+third)*multiplier
        return resistor       
        
    }

    $('#calculate').click(function(){

        var first = $('#1stBand').val();
        var second = $('#2ndBand').val();
        var third = $('#3rdBand').val();
        var multiplier = $('#multi').val();

        testband = Calculate(first,second,third,multiplier);

        $('#resistorvalue').text(testband);

        console.log(testband);
    });

});