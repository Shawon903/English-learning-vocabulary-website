document.getElementById("login-btn").addEventListener("click",function(event){
    event.preventDefault()
    const accountName = document.getElementById("account-text").value;
  
    // console.log(accountName);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    // console.log(convertedPin)
    if (/[^A-Za-z\s]/.test(accountName)) {
        alert("Account name must only contain text (no numbers allowed).");
        return;  // যদি নাম্বার থাকে, তাহলে ফাংশন শেষ হয়ে যাবে
    }
    if (accountName.trim() === "") {
      alert("Account name cannot be empty.");
      return;  // যদি ফাঁকা হয়, তাহলে ফাংশন শেষ হয়ে যাবে
  }
    

    // PIN চেক করা: ৬ ডিজিটের সংখ্যা থাকতে হবে
    if (convertedPin === 123456) {
        document.getElementById("navbar").classList.remove("hidden");
        document.getElementById("main-section").classList.remove("hidden");
        document.getElementById("english-banner").classList.add("hidden");

    } else {
        alert("Enter a valid PIN");
    }
})

document.getElementById("log-out").addEventListener("click", function(){
        document.getElementById("navbar").classList.add("hidden");
        document.getElementById("main-section").classList.add("hidden");
        document.getElementById("english-banner").classList.remove("hidden");
})



