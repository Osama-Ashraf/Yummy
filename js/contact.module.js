export default class Contact{
    constructor(){
        $('#data').html(`<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
        <div class="container w-75 text-center">
            <div class="row g-4">
                <div class="col-md-6">
                    <input id="nameInput" type="text" class="form-control" placeholder="Enter Your Name">
                    <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Special characters and numbers not allowed
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="emailInput" type="email" class="form-control " placeholder="Enter Your Email">
                    <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Email not valid *exemple@yyy.zzz
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="phoneInput" type="text" class="form-control " placeholder="Enter Your Phone">
                    <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Enter valid Phone Number
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="ageInput" type="number" class="form-control " placeholder="Enter Your Age">
                    <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Enter valid age
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="passwordInput" type="password" class="form-control " placeholder="Enter Your Password">
                    <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Enter valid password *Minimum eight characters, at least one letter and one number:*
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="repasswordInput" type="password" class="form-control " placeholder="Repassword">
                    <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Enter valid repassword 
                    </div>
                </div>
            </div>
            <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
        </div>
    </div>`);

    this.submitBtn = document.getElementById('submitBtn');
    this.nameInputTouched = false;
    this.emailInputTouched = false;
    this.phoneInputTouched = false;
    this.ageInputTouched = false;
    this.passwordInputTouched = false;
    this.repasswordInputTouched = false;

    $('input').keyup((e)=> { 
        this.formValidation();
    });

    
    this.submitBtn.click((e)=> { 
        this.formValidation();
    });


    


    this.submitBtn.addEventListener("click", () => {
        this.clearForm();
    })

    document.getElementById("nameInput").addEventListener("focus", () => {
        this.nameInputTouched = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        this.emailInputTouched = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        this.phoneInputTouched = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        this.ageInputTouched = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        this.passwordInputTouched = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        this.repasswordInputTouched = true
    })
    }

    formValidation(){

            if (this.nameInputTouched) {
                if (this.isNameValid()) {
                    document.getElementById("nameAlert").classList.replace("d-block", "d-none")
        
                } else {
                    document.getElementById("nameAlert").classList.replace("d-none", "d-block")
        
                }
            }
            if (this.emailInputTouched) {
        
                if (this.isEmailValid()) {
                    document.getElementById("emailAlert").classList.replace("d-block", "d-none")
                } else {
                    document.getElementById("emailAlert").classList.replace("d-none", "d-block")
        
                }
            }
        
            if (this.phoneInputTouched) {
                if (this.isPhoneValid()) {
                    document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
                } else {
                    document.getElementById("phoneAlert").classList.replace("d-none", "d-block")
        
                }
            }
        
            if (this.ageInputTouched) {
                if (this.isAgeValid()) {
                    document.getElementById("ageAlert").classList.replace("d-block", "d-none")
                } else {
                    document.getElementById("ageAlert").classList.replace("d-none", "d-block")
        
                }
            }
        
            if (this.passwordInputTouched) {
                if (this.isPasswordValid()) {
                    document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
                } else {
                    document.getElementById("passwordAlert").classList.replace("d-none", "d-block")
        
                }
            }
            if (this.repasswordInputTouched) {
                if (this.isRepasswordValid()) {
                    document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
                } else {
                    document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")
        
                }
            }
        
        
            if (this.isNameValid() && this.isEmailValid() && this.isPhoneValid() && this.isAgeValid() && this.isPasswordValid() && this.isRepasswordValid()) {
                this.submitBtn.removeAttribute("disabled")
            } else {
                this.submitBtn.setAttribute("disabled", true)
            }
        

    }

    isNameValid() {
        return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
    }
    
    isEmailValid() {
        return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
    }
    
    isPhoneValid() {
        return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
    }
    
    isAgeValid() {
        return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
    }
    
    isPasswordValid() {
        return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
    }
    
    isRepasswordValid() {
        return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
    }

    clearForm(){
        document.getElementById("nameInput").value='';
        document.getElementById("emailInput").value='';
        document.getElementById("phoneInput").value='';
        document.getElementById("ageInput").value='';
        document.getElementById("passwordInput").value='';
        document.getElementById("repasswordInput").value='';
    }
}



