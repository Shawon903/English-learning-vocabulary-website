

function lessonContainer(){
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res=>res.json())
    .then(arr=>displayLesson(arr.data))
    
}
function displayLesson(lesson){
  
    const lessonBtn = document.getElementById("lesson-container");
    for(let lessonButton of lesson){
        
        const lessonDiv = document.createElement("div");
        lessonDiv.innerHTML = `
         <button   class="lesson-btn border border-sky-500 px-4 py-1 rounded-md hover:bg-sky-500 group">
            <div class="flex items-center gap-1">
             <div><i class="fa-solid fa-book-open text-sm    text-sky-500 group-hover:text-white"></i></div>
             <div class="text-sm font-bold text-sky-500 group-hover:text-white">Lesson-${lessonButton.level_no}</div>
            </div>
           </button>
        
        `;
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
      



        lessonBtn.append(lessonDiv);

        
    }
    
}

// load vocabulary data level-1
function loadVocabulary(vocabulary){
 
    fetch("https://openapi.programming-hero.com/api/level/1")
    .then(response=>response.json())
    .then(data=>displayVocabulary(data.data))
    
}


function displayVocabulary(words){
  
  // hideLoader()
    const wordContainer = document.getElementById("word-container-1");
    for(let word of words){
        // console.log(word)
        const wordDiv = document.createElement("div");
        wordDiv.innerHTML=`
         <div class="bg-zinc-100 p-10">
           <div class="text-center">
             <h1 class="text-3xl font-bold mb-5">${word.word}</h1>
             <p class="text-md font-medium text-gray-600 mb-5">Meaning/Pronounciation</p>
             <h2 class="text-xl font-bold text-gray-600">${word.meaning}</h2>
           </div>
           <div class="flex items-center justify-between mt-10">
             <button onclick="loadModal(${word.id})"><i  class="fa-solid fa-info text-gray-600 bg-slate-200 p-2 rounded-sm"></i></button>
             <button onclick="pronounciationModal()"><i class="fa-solid fa-volume-high text-gray-600 bg-slate-200 p-2 rounded-sm"></i></button>
           </div>
         </div>
        
        `;
        wordContainer.append(wordDiv)
    }
   
}
   
/* <button onclick="loadModal()"><i  class="fa-solid fa-info text-gray-600 bg-slate-200 p-2 rounded-sm"></i></button>
             <button><i class="fa-solid fa-volume-high text-gray-600 bg-slate-200 p-2 rounded-sm"></i></button> */


loadVocabulary()
lessonContainer()

// load vocabulary data level-1
function loadVocabulary2(vocabulary){
    fetch("https://openapi.programming-hero.com/api/level/2")
    .then(response=>response.json())
    .then(data=>displayVocabulary2(data.data))
}


function displayVocabulary2(words){
    const wordContainer = document.getElementById("word-container-2");
    for(let word of words){
        // console.log(word)
        const wordDiv = document.createElement("div");
        wordDiv.innerHTML=`
         <div class="bg-zinc-100 p-10">
           <div class="text-center">
             <h1 class="text-3xl font-bold mb-5">${word.word}</h1>
             <p class="text-md font-medium text-gray-600 mb-5">Meaning/Pronounciation</p>
             <h2 class="text-xl font-bold text-gray-600">${word.meaning}</h2>
           </div>
           <div class="flex items-center justify-between mt-10">
             <button onclick="loadModal2(${word.id})"><i  class="fa-solid fa-info text-gray-600 bg-slate-200 p-2 rounded-sm"></i></button>
             <button><i class="fa-solid fa-volume-high text-gray-600 bg-slate-200 p-2 rounded-sm"></i></button>
           </div>
         </div>
        
        `;
        wordContainer.append(wordDiv)
    }
}
loadVocabulary2()

function loadVocabulary3(vocabulary){
    fetch("https://openapi.programming-hero.com/api/level/3")
    .then(response=>response.json())
    .then(data=>displayVocabulary3(data.data))
}


function displayVocabulary3(words){
    const wordContainer = document.getElementById("word-container-3");
    for(let word of words){
        // console.log(word)
        const wordDiv = document.createElement("div");
        wordDiv.innerHTML=`
         <div class="bg-zinc-100 p-10">
           <div class="text-center">
             <h1 class="text-3xl font-bold mb-5">${word.word}</h1>
             <p class="text-md font-medium text-gray-600 mb-5">Meaning/Pronounciation</p>
             <h2 class="text-xl font-bold text-gray-600">${word.meaning}</h2>
           </div>
            <div class="flex items-center justify-between mt-10">
             <button onclick="loadModal3(${word.id})"><i  class="fa-solid fa-info text-gray-600 bg-slate-200 p-2 rounded-sm"></i></button>
             <button><i class="fa-solid fa-volume-high text-gray-600 bg-slate-200 p-2 rounded-sm"></i></button>
           </div>
         </div>
        
        `;
        wordContainer.append(wordDiv)
    }
}
loadVocabulary3()

function loadVocabulary4(vocabulary){
    fetch("https://openapi.programming-hero.com/api/level/4")
    .then(response=>response.json())
    .then(data=>displayVocabulary4(data.data))
}


function displayVocabulary4(words){
    const wordContainer = document.getElementById("word-container-4");
    for(let word of words){
        console.log(word)
        const wordDiv = document.createElement("div");
        wordDiv.innerHTML=`
         <div class="bg-zinc-100 p-10">
           <div class="text-center">
             <h1 class="text-3xl font-bold mb-5">${word.word}</h1>
             <p class="text-md font-medium text-gray-600 mb-5">Meaning/Pronounciation</p>
             <h2 class="text-xl font-bold text-gray-600">${word.meaning}</h2>
           </div>
           <div class="flex items-center justify-between mt-10">
             <div><i class="fa-solid fa-info text-gray-600 bg-slate-200 p-2 rounded-sm"></i></div>
             <div><i class="fa-solid fa-volume-high text-gray-600 bg-slate-200 p-2 rounded-sm"></i></div>
           </div>
         </div>
        
        `;
        wordContainer.append(wordDiv)
    }
}
loadVocabulary4()

function loadVocabulary5(vocabulary){
    fetch("https://openapi.programming-hero.com/api/level/5")
    .then(response=>response.json())
    .then(data=>displayVocabulary5(data.data))
}


function displayVocabulary5(words){
    const wordContainer = document.getElementById("word-container-5");
    for(let word of words){
        // console.log(word)
        const wordDiv = document.createElement("div");
        wordDiv.innerHTML=`
         <div class="bg-zinc-100 p-10">
           <div class="text-center">
             <h1 class="text-3xl font-bold mb-5">${word.word}</h1>
             <p class="text-md font-medium text-gray-600 mb-5">Meaning/Pronounciation</p>
             <h2 class="text-md font-bold text-gray-600">${word.meaning}</h2>
           </div>
           <div class="flex items-center justify-between mt-10">
             <button onclick="loadModal5(${word.id})"><i  class="fa-solid fa-info text-gray-600 bg-slate-200 p-2 rounded-sm"></i></button>
             <button><i class="fa-solid fa-volume-high text-gray-600 bg-slate-200 p-2 rounded-sm"></i></button>
           </div>
         </div>
        
        `;
        wordContainer.append(wordDiv)
    }
}
loadVocabulary5()

function loadVocabulary6(vocabulary){
    fetch("https://openapi.programming-hero.com/api/level/6")
    .then(response=>response.json())
    .then(data=>displayVocabulary6(data.data))
}


function displayVocabulary6(words){
    const wordContainer = document.getElementById("word-container-6");
    for(let word of words){
        // console.log(word)
        const wordDiv = document.createElement("div");
        wordDiv.innerHTML=`
         <div class="bg-zinc-100 p-10">
           <div class="text-center">
             <h1 class="text-3xl font-bold mb-5">${word.word}</h1>
             <p class="text-md font-medium text-gray-600 mb-5">Meaning/Pronounciation</p>
             <h2 class="text-md font-bold text-gray-600">${word.meaning}</h2>
           </div>
           <div class="flex items-center justify-between mt-10">
             <button onclick="loadModal6(${word.id})"><i  class="fa-solid fa-info text-gray-600 bg-slate-200 p-2 rounded-sm"></i></button>
             <button><i class="fa-solid fa-volume-high text-gray-600 bg-slate-200 p-2 rounded-sm"></i></button>
           </div>
         </div>
        
        `;
        wordContainer.append(wordDiv)
    }
}
loadVocabulary6()

function loadVocabulary7(vocabulary){
    fetch("https://openapi.programming-hero.com/api/level/7")
    .then(response=>response.json())
    .then(data=>displayVocabulary7(data.data))
}


function displayVocabulary7(words){
    const wordContainer = document.getElementById("word-container-7");
    for(let word of words){
        console.log(word)
        const wordDiv = document.createElement("div");
        wordDiv.innerHTML=`
         <div class="bg-zinc-100 p-10">
           <div class="text-center">
             <h1 class="text-3xl font-bold mb-5">${word.word}</h1>
             <p class="text-md font-medium text-gray-600 mb-5">Meaning/Pronounciation</p>
             <h2 class="text-xl font-bold text-gray-600">${word.meaning}</h2>
           </div>
           <div class="flex items-center justify-between mt-10">
             <div><i class="fa-solid fa-info text-gray-600 bg-slate-200 p-2 rounded-sm"></i></div>
             <div><i class="fa-solid fa-volume-high text-gray-600 bg-slate-200 p-2 rounded-sm"></i></div>
           </div>
         </div>
        
        `;
        wordContainer.append(wordDiv)
    }
}
loadVocabulary7()



