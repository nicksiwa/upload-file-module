$(function () {
    $("#dialog-message").dialog({
        modal: true,
        autoOpen: false,
        buttons: {
            Ok: function () {
                $(this).dialog("close");
            }
        }
    });

    $( "#upload" ).on( "click", function() {
        $( "#dialog-message" ).dialog( "open" );
      });
});