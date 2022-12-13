
$(document).ready(function(){
    
    $('div.band, img.picture').hide();
    $('img.picture.banthree').show();

    $('#selection').on('change', function(){
        var bvalue = $(this).val();
        $('div.band, img.picture').hide();
        $('div.band.ban' + bvalue).show();
        $('img.picture.ban' + bvalue).show();
    });

    function Calculate(first, second, multiplier){
        resistor = (first+second)*multiplier
        return resistor         
    };

    $('#calculate').click(function(){

        var first = $('#1stband').val();

        var second = $('#2ndband').val();

        var multiplier = $('#multi').val();

        testband = Calculate(first,second,multiplier);

        $('#resistorvalue').text(testband);

        console.log(testband);
    });

});