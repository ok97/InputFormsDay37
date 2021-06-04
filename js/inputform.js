const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () 
{
   output.textContent = salary.value;
});

/* UC1:- As a User need to enter a valid First Name.
         - First name starts with Cap and has minimum 3 characters. 
*/
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () 
{
   let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
   if (nameRegex.test(text.value)) 
   {
      textError.textContent = "";
   }
   else 
   {
      textError.textContent = " Invalid Name";
   }

});

/* UC2:- As a User need to enter a valid email
         - E.g. abc.xyz@bl.co.in - Email has 3 mandatory parts (abc, bl & co) and 2 optional (xyz & in) with precise @ and . positions. */

         const emailInput = document.querySelector("#email");
         const errorEmail = document.querySelector(".email-error");
         emailInput.addEventListener('input', function ()
          {
             let emailRegex = RegExp('^([a-z0-9A-Z])+([._+-]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{3}([.]{1}[a-z]{2})?$');
             if (emailRegex.test(emailInput.value))
             {
               errorEmail.textContent = "";
             }
             else
             {
               errorEmail.textContent = " Invalid Email"
            }
         });


         /* UC3:- As a User need to follow pre-defined Mobile Format.
                  - E.g. 91 9919819801 - Country code follow by space and 10 digit number.
         */
      
        const mobileInput = document.querySelector("#tel");
        const errorMobile = document.querySelector(".tel-error");
        mobileInput.addEventListener('input', function ()
          {
            let mobileRegex = RegExp("^[0-9]{2}[ ]*[0-9]{10}$"); //Pattern
            if (mobileRegex.test(mobileInput.value))
            {
                errorMobile.textContent = "";
            }
            else
            {
                errorMobile.textContent = " Invalid Mobile Number"
            }
          });

        