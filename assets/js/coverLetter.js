const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
function coverLetterPage() {
    var companyName = urlParams.get("companyName");
    var jobTitle = urlParams.get("jobTitle");
    var applicantName = urlParams.get("applicantName");
    var applicantEmail = urlParams.get("applicantEmail");
    var applicantPhone = urlParams.get("applicantPhone");
    var applicantAddress = urlParams.get("applicantAddress");
    var date = urlParams.get("date");
    const companyNameElements = document.getElementsByClassName("companyName");
    const jobTitleElements = document.getElementsByClassName("jobTitle");
    const applicantNameElements = document.getElementsByClassName("applicantName");
    const applicantEmailElements = document.getElementsByClassName("applicantEmail");
    const applicantPhoneElements = document.getElementsByClassName("applicantPhone");
    const applicantAddressElements = document.getElementsByClassName("applicantAddress");
    const dateElements = document.getElementsByClassName("date");
    for (var i = 0; i < companyNameElements.length; i++) {
        companyNameElements[i].innerHTML = companyName;
    }
    for (var i = 0; i < jobTitleElements.length; i++) {
        jobTitleElements[i].innerHTML = jobTitle;
    }
    for (var i = 0; i < applicantNameElements.length; i++) {
        applicantNameElements[i].innerHTML = applicantName;
    }
    for (var i = 0; i < applicantEmailElements.length; i++) {
        applicantEmailElements[i].innerHTML = applicantEmail;
    }
    for (var i = 0; i < applicantPhoneElements.length; i++) {
        applicantPhoneElements[i].innerHTML = applicantPhone;
    }
    for (var i = 0; i < applicantAddressElements.length; i++) {
        applicantAddressElements[i].innerHTML = applicantAddress;
    }
    for (var i = 0; i < dateElements.length; i++) {
        dateElements[i].innerHTML = date;
    }
    window.print();
}
window.onload = function () {
    if (window.location.href.indexOf("coverLetter.html") > -1) {
        coverLetterPage();
    }
}