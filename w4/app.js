console.log('Hi There!');



const instantGreeting = document.getElementById;('instantGreeting');

const handleFormSubmit = function(event) {
    event.preventDefault();

    const formData = formHandler.getFormInputs();
    console.log(`key of submit value of ${formData.submit}`);
    console.log(`key of placeholder value of ${formData.placeholder}`);
    console.log(`key of boo value of ${formData.boo}`);
    console.log('formData');
}

const clearFormButton = document.getElementById('clearFormButton');

const handleClearForm = function () {
    formHandler.clearForm();
    console.log('boo');
}

const heading = document.getElementById('boo');
console.log();

