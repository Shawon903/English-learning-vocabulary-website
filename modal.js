

const loadModal = (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;

  fetch(url)
      .then(res => res.json())
      .then(data => showModal(data.data))
      .catch(error => console.error("Error fetching data:", error));
}

const showModal = (data) => {
  console.log(data);

  // Show the modal (assuming it's a <dialog> element)
  const modalcontainer = document.getElementById('my_modal_1');
  modalcontainer.innerHTML = ""; // Clear previous content

  const modal = document.createElement('div');
  modal.innerHTML = `
      <div class="modal-box w-full max-w-5xl">
          <h2 class="text-2xl font-bold mb-4">${data.word} (<i class="fa-solid fa-microphone"></i>:${data.meaning})</h2>
          <p class="text-xl font-bold mb-2 text-gray-900">Meaning</p>
          <p class="font-semibold text-gray-800 mb-3">${data.meaning}</p>
          <h3 class="font-bold text-xl text-gray-900 mb-2">Example</h3>
          <p class="text-xl text-gray-600 mb-4">${data.sentence}</p>
          <h3 class="font-bold text-gray-900">সমার্থক শব্দ গুলো</h3>
          <div class="flex gap-5 mb-5 mt-2">
              ${data.synonyms && data.synonyms.length > 0 ? 
                  data.synonyms.map(synonym => 
                      `<button class="btn bg-sky-100 rounded-md py-2 px-4">${synonym}</button>`
                  ).join('') 
                  : ""
              }
          </div>
          <div>
              <form method="dialog">
                  <button class="btn bg-sky-500 text-white rounded-md">Complete Learning</button>
              </form>
          </div>
      </div>
  `;

  modalcontainer.appendChild(modal);
  modalcontainer.showModal(); // Show the modal
}

const loadModal2 = (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;

  fetch(url)
      .then(res => res.json())
      .then(data => showModal2(data.data))
      .catch(error => console.error("Error fetching data:", error));
}

const showModal2 = (data) => {
  console.log(data);

  // Show the modal (assuming it's a <dialog> element)
  const modalcontainer2 = document.getElementById('my_modal_2');
  modalcontainer2.innerHTML = ""; // Clear previous content

  const modal = document.createElement('div');
  modal.innerHTML = `
      <div class="modal-box w-full max-w-5xl">
          <h2 class="text-2xl font-bold mb-4">${data.word} (<i class="fa-solid fa-microphone"></i>:${data.meaning})</h2>
          <p class="text-xl font-bold mb-2 text-gray-900">Meaning</p>
          <p class="font-semibold text-gray-800 mb-3">${data.meaning}</p>
          <h3 class="font-bold text-xl text-gray-900 mb-2">Example</h3>
          <p class="text-xl text-gray-600 mb-4">${data.sentence}</p>
          <h3 class="font-bold text-gray-900">সমার্থক শব্দ গুলো</h3>
          <div class="flex gap-5 mb-5 mt-2">
              ${data.synonyms && data.synonyms.length > 0 ? 
                  data.synonyms.map(synonym => 
                      `<button class="btn bg-sky-100 rounded-md py-2 px-4">${synonym}</button>`
                  ).join('') 
                  : ""
              }
          </div>
          <div>
              <form method="dialog">
                  <button class="btn bg-sky-500 text-white rounded-md">Complete Learning</button>
              </form>
          </div>
      </div>
  `;

  modalcontainer2.appendChild(modal);
  modalcontainer2.showModal(); // Show the modal
}

const loadModal3 = (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;

  fetch(url)
      .then(res => res.json())
      .then(data => showModal3(data.data))
      .catch(error => console.error("Error fetching data:", error));
}

const showModal3 = (data) => {
  console.log(data);

  // Get modal container
  const modalcontainer3 = document.getElementById('my_modal_3');
  modalcontainer3.innerHTML = ""; // Clear previous content

  const modal = document.createElement('div');
  modal.innerHTML = `
      <div class="modal-box w-full max-w-5xl">
          <h2 class="text-2xl font-bold mb-4">${data.word} (<i class="fa-solid fa-microphone"></i>: ${data.meaning})</h2>
          <p class="text-xl font-bold mb-2 text-gray-900">Meaning</p>
          <p class="font-semibold text-gray-800 mb-3">${data.meaning}</p>
          <h3 class="font-bold text-xl text-gray-900 mb-2">Example</h3>
          <p class="text-xl text-gray-600 mb-4">${data.sentence}</p>
          <h3 class="font-bold text-gray-900">সমার্থক শব্দ গুলো</h3>
          <div class="flex gap-5 mb-5 mt-2">
              ${data.synonyms && data.synonyms.length > 0 ? 
                  data.synonyms.map(synonym => 
                      `<button class="btn bg-sky-100 rounded-md py-2 px-4">${synonym}</button>`
                  ).join('') 
                  : ""
              }
          </div>
          <div>
              <form method="dialog">
                  <button class="btn bg-sky-500 text-white rounded-md">Complete Learning</button>
              </form>
          </div>
      </div>
  `;

  modalcontainer3.appendChild(modal);
  
  // Show the modal
  modalcontainer3.showModal(); 
}

const loadModal5 = (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;

  fetch(url)
      .then(res => res.json())
      .then(data => showModal5(data.data))
      .catch(error => console.error("Error fetching data:", error));
}

const showModal5 = (data) => {
  console.log(data);

  // Get modal container
  const modalcontainer5 = document.getElementById('my_modal_5');
  modalcontainer5.innerHTML = ""; // Clear previous content

  const modal = document.createElement('div');
  modal.innerHTML = `
      <div class="modal-box w-full max-w-5xl">
          <h2 class="text-2xl font-bold mb-4">${data.word} (<i class="fa-solid fa-microphone"></i>: ${data.meaning})</h2>
          <p class="text-xl font-bold mb-2 text-gray-900">Meaning</p>
          <p class="font-semibold text-gray-800 mb-3">${data.meaning}</p>
          <h3 class="font-bold text-xl text-gray-900 mb-2">Example</h3>
          <p class="text-xl text-gray-600 mb-4">${data.sentence}</p>
          <h3 class="font-bold text-gray-900">সমার্থক শব্দ গুলো</h3>
          <div class="flex gap-5 mb-5 mt-2">
              ${data.synonyms && data.synonyms.length > 0 ? 
                  data.synonyms.map(synonym => 
                      `<button class="btn bg-sky-100 rounded-md py-2 px-4">${synonym}</button>`
                  ).join('') 
                  : ""
              }
          </div>
          <div>
              <form method="dialog">
                  <button class="btn bg-sky-500 text-white rounded-md">Complete Learning</button>
              </form>
          </div>
      </div>
  `;

  modalcontainer5.appendChild(modal);
  
  // Show the modal
  modalcontainer5.showModal(); 
}

const loadModal6 = (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;

  fetch(url)
      .then(res => res.json())
      .then(data => showModal6(data.data))
      .catch(error => console.error("Error fetching data:", error));
}

const showModal6 = (data) => {
  console.log(data);

  // Get modal container
  const modalcontainer6 = document.getElementById('my_modal_6');
  modalcontainer6.innerHTML = ""; // Clear previous content

  const modal = document.createElement('div');
  modal.innerHTML = `
      <div class="modal-box w-full max-w-5xl">
          <h2 class="text-2xl font-bold mb-4">${data.word} (<i class="fa-solid fa-microphone"></i>: ${data.meaning})</h2>
          <p class="text-xl font-bold mb-2 text-gray-900">Meaning</p>
          <p class="font-semibold text-gray-800 mb-3">${data.meaning}</p>
          <h3 class="font-bold text-xl text-gray-900 mb-2">Example</h3>
          <p class="text-xl text-gray-600 mb-4">${data.sentence}</p>
          <h3 class="font-bold text-gray-900">সমার্থক শব্দ গুলো</h3>
          <div class="flex gap-5 mb-5 mt-2">
              ${data.synonyms && data.synonyms.length > 0 ? 
                  data.synonyms.map(synonym => 
                      `<button class="btn bg-sky-100 rounded-md py-2 px-4">${synonym}</button>`
                  ).join('') 
                  : ""
              }
          </div>
          <div>
              <form method="dialog">
                  <button class="btn bg-sky-500 text-white rounded-md">Complete Learning</button>
              </form>
          </div>
      </div>
  `;

  modalcontainer6.appendChild(modal);
  
  // Show the modal
  modalcontainer6.showModal(); 
}




