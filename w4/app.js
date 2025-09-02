console.log('Hi There!');

const clearFormButton = document.getElementById('clearFormButton');
const heading = document.getElementById('boo');
const form = document.querySelector ('form');


const handleFormSubmit = function(event) {
     event.preventDefault();

 const formData = formHandler.getFormInputs();
     console.log(`key of submit value of ${formData.submit}`);
     console.log(`key of placeholder value of ${formData.placeholder}`);
     console.log(`key of boo value of ${formData.boo}`);
     console.log('formData');
};


const handleClearForm = function () {
    formHandler.clearForm();
    console.log('boo');
}


form.addEventListener('submit', function() {
    event.preventDefault();
    heading.style.display = 'block'
});