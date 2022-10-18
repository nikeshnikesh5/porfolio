function buttonReady(){
    if ($.trim($("#email").val()) === "" || $.trim($("#contact-name").val()) === "" ||$.trim($("#subject").val()) === ""||$.trim($("#contact-name").val()) === "") {
        alert('You did not fill out all the fields');   
        return false;
    }
}


$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,
                minlength:3,
                noSpace: true
            },
            email:{
                required:true,
                email:true,
                noSpace: true
            },
            subject:{
                required:true,
                minlength:5,
                noSpace: true
            },
            message:{
                required:true,
                minlength:20,
                noSpace: true
            }

        }

    })
})