$("div.band , img.picture").hide();
$("img.picture.banthree").show();

$(document).ready(function(){
    
    $('select.form-control').on('change', function(){
        var demovalue = $(this).val();
        $("div.band , img.picture").hide();
        $("div.band.ban" + demovalue).show();
        $("img.picture.ban" + demovalue).show();
    });

});
