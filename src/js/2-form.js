let formData = {
    email: "",
    message: ""
}

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

form.addEventListener("input", event => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

const storageData = localStorage.getItem(localStorageKey);
if (storageData) {
    formData = JSON.parse(storageData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
};

form.addEventListener("submit", event => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem(localStorageKey);

    formData.email = '';
    formData.message = '';
    form.reset();
});

