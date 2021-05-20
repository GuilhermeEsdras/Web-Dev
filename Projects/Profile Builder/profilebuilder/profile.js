var template = document.getElementById("template").innerHTML,
    form = document.getElementById("form"),
    preview = document.getElementById("preview"),
    previewBtn = document.getElementById("previewBtn");

// fillForm();

previewBtn.addEventListener("click", function () {
    var data = getFormData(),
        html = Mustache.render(template, data);
    
    preview.innerHTML = html;
    document.body.removeChild(form);
});

function getFormData() {
    return {
        title: getValue("title"),
        firstName: getValue("firstName"),
        lastName: getValue("lastName"),
        style: getValue("style"),
        address: getValue("address"),
        address2: getValue("address2"),
        city: getValue("city"),
        state: getValue("state"),
        zip: getValue("zip"),
        email: getValue("email"),
        website: getValue("website"),
        interests: getValue("interests"),
        experience: getValue("experience"),
        style: getValue("style")
    };
}

function getValue(id) {
    return document.getElementById(id).value;
}

function setValue(id, value) {
    document.getElementById(id).value = value;
}

function fillForm() {
    setValue("title", "Mr.");
    setValue("firstName", "Fulano");
    setValue("lastName", "de Tal");
    setValue("address", "Rua dos Bobos, 52");
    setValue("address2", "Apt. 2");
    setValue("city", "Tal");
    setValue("state", "MA");
    setValue("zip", "11111000");
    setValue("email", "asdsdl@mail.com");
    setValue("website", "www.site.com");
    setValue("interests", "Adipisicing in minim duis do deserunt laborum aliquip tempor aliquip ullamco.");
    setValue("experience", "Sunt enim eu duis incididunt ea enim incididunt.");
}