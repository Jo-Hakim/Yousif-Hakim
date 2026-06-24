const sections = ["home", "portfolio", "services", "contact"];
const applicationOverlay = document.getElementById("application-overlay");
const form = document.getElementById("message-form"),
  serviceID = "service_ix4dh1r",
  templateID = "template_bo778km",
  first = document.getElementById("f-name"),
  last = document.getElementById("l-name"),
  email = document.getElementById("email"),
  message = document.getElementById("message"),
  certificates = document.getElementsByClassName("certificate");

function showContent(sectionId) {
  for (const id of sections) {
    const section = document.getElementById(id);
    if (id === sectionId) {
      section.style.display = "block";
      section.style.paddingBottom = "30px";
    } else {
      section.style.display = "none";
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  setInterval(changeCertificate, 4000);
});
applicationOverlay.addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "Heart.apk";
  link.download = "Heart.apk";
  link.click();
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!form.checkValidity) {
    form.reportValidity();
    return;
  }
  sendEmail(username, emailAddress, messageText);
});

const username = first.value.trim() + " " + last.value.trim();
const emailAddress = email.value.trim();
const messageText = message.value.trim();
emailjs.init("gsGbOGblQxbLNhJUW");
function sendEmail(name, email, message) {
  emailjs.send(serviceID, templateID, {
    from_name: name,
    reply_to: email,
    message: message,
  });
}

var currentCertificate = 0;
function changeCertificate() {
  certificates[currentCertificate].style.animation =
    "goLeft 0.3s ease-out forwards";

  setTimeout(() => {
    certificates[currentCertificate].style.display = "none";

    currentCertificate = (currentCertificate + 1) % certificates.length;

    certificates[currentCertificate].style.display = "inline-block";

    certificates[currentCertificate].style.animation =
      "comeFromRight 0.3s ease-out forwards";
  }, 300);
}
