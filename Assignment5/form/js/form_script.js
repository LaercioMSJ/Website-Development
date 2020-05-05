"use strict";

/*
	Assignment 5 - Form 
	NSCC Application Form 
	Author: Laercio M Silva Jr W0433181
	Date: 05/02/2020
   
	Filename: form_script.js
	Location\Filename: ..\form\js\form_script.js
*/


function validateForm() {

    var formIsValid = true;

    var radioChecked;
    const fieldsetRadio = document.querySelectorAll('fieldset');

    fieldsetRadio.forEach( el => {

        const radioByFieldset = el.querySelectorAll('input');
        radioChecked = 0;

        radioByFieldset.forEach( e => {

            if (e.checked) {
                radioChecked += 1;
            }
    
            else {
                radioChecked += 0;
            }

        });

        if (radioChecked == 0) {
            el.style.background = '#f79292';
            formIsValid = false;
        }
        else {
            el.style.background = 'white';
        }

    });


    const allInputs = document.querySelectorAll('input[type="text"], input[type="tel"]');
    var letters = /^[a-z A-Z]+$/;
    var numbers = /^[0-9/-]+$/;

    allInputs.forEach( el => {

        if (el.disabled == false) {

            if (el.value.match(numbers) && el.className === 'requireNumbers') {
                el.style.background = 'rgb(232,232,232)';
            }

            else if (el.value.match(letters) && el.className === 'requireLetters') {
                el.style.background = 'rgb(232,232,232)';
            }

            else if (el.value.length != 0 && el.className === 'requireLettersAndNumbers') {
                el.style.background = 'rgb(232,232,232)';
            }

            else {
                el.style.background = '#f79292';
                formIsValid = false;
            }

        }

    });


    const allEmails = document.querySelectorAll('input[type="email"]');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    allEmails.forEach( el => {
        if (el.value.match(mailformat)) {
            el.style.background = 'rgb(232,232,232)';
        }
        else {
            el.style.background = '#f79292';
            formIsValid = false;
        }
    });


    if (formIsValid == true) {
        alert('Form successfully submitted');
        return true;
    }
    else {
        alert('Form has not been submitted. Please check the red fields');
        return false;
    }

}



function enableElements(radioName, radioValue) {

    if (radioName === 'englishFirstLangRadio') {
        if (radioValue === 'Yes') {
            document.getElementById('opacity1').style.opacity = '0.2';
            document.getElementById("firstLanguage").disabled = true;
            document.getElementById("firstLanguage").value = '';
            document.getElementById("firstLanguage").style.background = 'rgb(232,232,232)';
        }
        else if (radioValue === 'No') {
            document.getElementById('opacity1').style.opacity = '1';
            document.getElementById("firstLanguage").disabled = false; 
        }
    }


    if (radioName === 'citizenshipStatusRadio') {
        if (radioValue === 'Canadian Citizen' || radioValue === 'Permanent Resident' || radioValue === 'Refugee') {
            document.getElementById('opacity2').style.opacity = '0.2';
            document.getElementById("CountryOfCit").disabled = true;
            document.getElementById("CountryOfCit").value = '';
            document.getElementById("CountryOfCit").style.background = 'rgb(232,232,232)';
        }
        else if (radioValue === 'Other') {
            document.getElementById('opacity2').style.opacity = '1';
            document.getElementById("CountryOfCit").disabled = false; 
        }
    }


    if (radioName === 'applicationFeeRadio') {
        if (radioValue === 'Cheque') {
            document.getElementById('opacity3').style.opacity = '0.2';
            document.getElementById("creditCardNumber").disabled = true;
            document.getElementById("creditCardNumber").value = '';
            document.getElementById("creditCardNumber").style.background = 'rgb(232,232,232)';
            document.getElementById("creditCardExpDate").disabled = true;
            document.getElementById("creditCardExpDate").value = '';
            document.getElementById("creditCardExpDate").style.background = 'rgb(232,232,232)';
            document.getElementById("creditCardCHolderName").disabled = true;
            document.getElementById("creditCardCHolderName").value = '';
            document.getElementById("creditCardCHolderName").style.background = 'rgb(232,232,232)';
            document.getElementById("creditCardCHolderSign").disabled = true;
            document.getElementById("creditCardCHolderSign").value = '';
            document.getElementById("creditCardCHolderSign").style.background = 'rgb(232,232,232)';
        }
        else if (radioValue === 'Visa' || radioValue === 'Mastercard' || radioValue === 'Discover' || radioValue === 'American Express') {
            document.getElementById('opacity3').style.opacity = '1';
            document.getElementById("creditCardNumber").disabled = false;
            document.getElementById("creditCardExpDate").disabled = false;
            document.getElementById("creditCardCHolderName").disabled = false;
            document.getElementById("creditCardCHolderSign").disabled = false;
        }
    }

}