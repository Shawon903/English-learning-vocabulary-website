function displayLesson(lesson) {
    
    const lessonBtn = document.getElementById("lesson-container");

    for (let lessonButton of lesson) {
        const lessonDiv = document.createElement("div");

        // বাটন তৈরি করা হলো
        const button = document.createElement("button");
        button.className = "lesson-btn border border-sky-500 px-4 py-1 rounded-md hover:bg-sky-500 group transition-all";
        button.innerHTML = `
            <div class="flex items-center gap-1">
                <div class="icon"><i class="fa-solid fa-book-open text-sm text-sky-500 group-hover:text-white"></i></div>
                <div class="text text-sm font-bold text-sky-500 group-hover:text-white">Lesson-${lessonButton.level_no}</div>
            </div>
        `;

        // ক্লিক ইভেন্ট যুক্ত করা হলো
        button.addEventListener("click", function () {
            // সব বাটন থেকে active ক্লাস রিমুভ করা
            document.querySelectorAll("#lesson-container button").forEach(btn => {
                btn.classList.remove("bg-sky-500", "text-white");

                // ভিতরের text এবং icon-এর কালারও রিসেট করা
                btn.querySelector(".icon i").classList.remove("text-white");
                btn.querySelector(".text").classList.remove("text-white");
            });

            // ক্লিক করা বাটনে active ক্লাস যোগ করা (লাল ব্যাকগ্রাউন্ড এবং ভিতরের টেক্সট-আইকন সাদা)
            button.classList.add("bg-sky-500", "text-white");
            button.querySelector(".icon i").classList.add("text-white");
            button.querySelector(".text").classList.add("text-white");
            
        });
      
        

        lessonDiv.appendChild(button);
        lessonBtn.appendChild(lessonDiv);
    }
}


// প্রথমে সব সেকশন হাইড করা হবে
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("section[id^='word-container']").forEach(sec => {
        sec.classList.add("hidden");
    });
});

// বাটন ক্লিক ইভেন্ট লিসেনার যোগ করা
// প্রথমে সব সেকশন হাইড করা হবে
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("section[id^='word-container']").forEach(sec => {
        sec.classList.add("hidden");
    });
});

// প্রথমে সব সেকশন হাইড করা হবে
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("section[id^='word-container']").forEach(sec => {
        sec.classList.add("hidden");
    });
});

// বাটন ক্লিক ইভেন্ট লিসেনার যোগ করা
document.getElementById("lesson-container").addEventListener("click", function (event) {
    const clickedButton = event.target.closest("button"); // ক্লিক করা বাটন খুঁজে বের করা

    if (clickedButton) {
        // সব সেকশন হাইড করা হবে
        document.querySelectorAll("section[id^='word-container']").forEach(sec => {
            sec.classList.add("hidden");
        });

        // ক্লিক করা বাটনের লেসনের নাম্বার বের করা (Lesson-1, Lesson-2 ইত্যাদি)
        const lessonNumber = clickedButton.innerText.match(/\d+/)[0]; // সংখ্যা বের করা

        // সংশ্লিষ্ট সেকশন দেখানো হবে
        const sectionToShow = document.getElementById(`word-container-${lessonNumber}`);
        if (sectionToShow) {
            sectionToShow.classList.remove("hidden");
        }
    }
});
document.getElementById("lesson-container").addEventListener("click",function(){
    document.getElementById("indicate-lesson").classList.add("hidden")
})

document.getElementById("faq").addEventListener("click", function() {
    // #fq-ask সেকশনে স্ক্রল করা
    document.getElementById("fq-ask").scrollIntoView({
        behavior: "smooth"  // স্নিগ্ধভাবে স্ক্রল হবে
    });
});
document.getElementById("learn").addEventListener("click",function(){
    document.getElementById("learn-container").scrollIntoView({
        behavior:"smooth"
    })
})

