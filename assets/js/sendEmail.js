function sendMail(contactForm) {
    emailjs.send("service_dxl0jtq", "rosie", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                contactForm.reset();
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;
}