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

    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!email || !message) {
        alert("Fill please all fields");
        return;
    }
    console.log({ email, message });
    localStorage.removeItem(localStorageKey);

    formData.email = '';
    formData.message = '';
    form.reset();
});

