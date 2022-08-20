function formSubmit() {
    console.log("formSubmit");
    var form = document.getElementById("coverLetterInfoForm");
    var formData = new FormData(form);
    var companyName = formData.get("companyName");
    var jobTitle = formData.get("jobTitle");
    var applicantName = formData.get("applicantName");
    var applicantEmail = formData.get("applicantEmail");
    var applicantPhone = formData.get("applicantPhone");
    var applicantAddress = formData.get("applicantAddress");
    var date = formData.get("date");
    var pdf = "coverLetter.html?companyName=" + companyName + "&jobTitle=" + jobTitle + "&applicantName=" + applicantName + "&applicantEmail=" + applicantEmail + "&applicantPhone=" + applicantPhone + "&applicantAddress=" + applicantAddress + "&date=" + date;
    CreatePdfIFrame(pdf);
}
function CreatePdfIFrame (pdf) {
    var iframe = document.createElement('iframe');
    iframe.src = pdf;
    iframe.style.display = 'none';
    document.body.appendChild(iframe); 
}