const sections = ["home", "portfolio", "services", "contact"];
const form = document.getElementById("message-form"),
  serviceID = "service_I3m37wc",
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

function download(app) {
  const link = document.createElement("a");
  link.href = app;
  link.download = app;
  link.click();
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  sendEmail(username, emailAddress, messageText);
  for (const i of document.querySelectorAll('input:not([type="submit"])')) {
    i.value = "";
  }
  message.value = "";
});

const username = first.value.trim() + " " + last.value.trim();
const emailAddress = email.value.trim();
const messageText = message.value.trim();
emailjs.init("gsGbOGblQxbLNhJUW");
async function sendEmail(name, email, message) {
  try {
    await emailjs.send(serviceID, templateID, {
      from_name: name,
      reply_to: email,
      message: message,
    });
    alert("Your message has been sent");
  } catch (err) {
    alert(err);
  }
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
