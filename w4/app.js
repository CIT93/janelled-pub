console.log('Hi There!');

const clearFormButton = document.getElementById('clearFormButton');

const instantGreeting = document.getElementById;('instantGreeting');

const handleFormSubmit = function(event) {
    event.preventDefault();

    const formData = formHandler.getFormInputs();
    console.log(`key of submit value of ${formData.submit}`);
    console.log(`key of placeholder value of ${formData.placeholder}`);


}