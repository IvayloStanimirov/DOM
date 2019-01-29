function validate() {
    let username = $('#username')
    let email = $('#email')
    let password = $('#password')
    let confirmPassword = $('#confirm-password')
    let companyChekBox = $('#company');
    let companyNumber = $('#companyNumber');
    let compantInfo = $('#companyInfo')
    let submitBtn = $('#submit')
    let isValidation = $('#valid')
    let allIsValid = true;

    companyChekBox.on('change', function () {
        if (companyChekBox.is(':checked')) {
            compantInfo.css('display', 'block')
        } else {
            compantInfo.css('display', 'none')
        }
    });

    submitBtn.on('click',function(ev){
        ev.preventDefault();
        validateForm();
        isValidation.css('display',allIsValid ? 'block' : 'none')
        allIsValid= true;
    })

    function validateForm (){
        validateInputWithRegex(username,/^[A-Za-z\d]{3,20}$/g);
        validateInputWithRegex(email,/^.*?@.*?\..*$/g);

        if(confirmPassword.val() === password.val()){
            validateInputWithRegex(password,/^\w{5,15}$/g);
            validateInputWithRegex(confirmPassword,/^\w{5,15}$/g); 
         }else
          {
            password.css('border','solid red')
            confirmPassword.css('border','solid red')
            allIsValid= false;
        }
        if(companyChekBox.is(':checked')){
            validateCompanyInfo();
        }

    }
    function validateInputWithRegex(input,pattern){
        if(pattern.test(input.val())){
            input.css('border','none')
        }else{
            input.css('border','solid red')
            allIsValid = false;
        }

    }
    function validateCompanyInfo(){
        let numValue = +companyNumber.val();
        if(numValue >=1000 && numValue<=9999){
            companyNumber.css('border','none')
        }else{
            companyNumber.css('border','solid red')
            allIsValid = false;
        }
    }

}
