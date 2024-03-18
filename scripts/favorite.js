// function fetchData(api) {
//     return fetch(api)
//         .then((response) => response.json())
//         .catch((error) => console.error("У тебя ошибка, исправляй", error));
// }

// function renderSneakers(data) {
//     let wrapper = document.querySelector(".sneakers-wrapper");
//     wrapper.innerHTML = data
//         .map((item) => {
//             return `
//             <div class="sneakers-card">
//             <button class="sneakers__card-like">
//             <img
//             src="./images/${item.islike ? 'like-2.svg' : 'like-1.svg'}"

//              data-is-like="${item.islike ? 'true' : 'folse'}"
//              alt""
//              class"card-like"
//              data-sneaker-id="${item.id}"
//             </button>
//             <img
//               src="../images/${item.imageUrl}"
//               alt=""
//               class="sneakers__card-img"
//             />
//             <h4 class="sneakers__card-title">
//               ${item.title}
//             </h4>
//             <div class="sneakers__card-actions">
//               <div class="sneakers__action-price">
//                 <p>Цена</p>
//                 <b>${item.price}$</b>
//               </div>
//               <button class="sneakers__actions-cart">
//                 <img src="../images/plus.svg" alt="" />
//               </button>
//             </div>
//           </div>`;
//         })
//         .join("");
// }
// let cardLike = document.querySelector(".card-like");

// function addLike(sneakersID) {
//     return fetch("https://0a8334a097f9af9c.mokky.dev/res", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ like: sneakersID }),
//     })
//         .then((response) => response.json())
//         .catch((error) => console.log("error", error));
// }

// document.addEventListener("click", (event) => {
//     if (event.target.classList.contains("card-like")) {
//         if (event.target.src === "http://127.0.0.1:5500/images/like-1.svg") {
//             event.target.src = "http://127.0.0.1:5500/images/like-2.svg";
//             const sneakerID = event.target.datatest.sneakerID;
//             addLike(sneakerID).then(
//                 (json) => (event.target.datatest.favId = json.id)
//             );
//         } else {
//             event.target.src = "http://127.0.0.1:5500/images/like-1.svg";
//             const likedId = event.target.datatest.favID;
//             removeLike(likedId);
//         }
//     }
// });

// function removeLike(likedId) {
//     return fetch(`https://0a8334a097f9af9c.mokky.dev/res${likedId}`, {
//         method: "DELETE",
//     })
//         .then((response) => response.json())
//         .catch((err) => console.log(err));
// }
// function renderlikeSneakers(likeSneakers) {
//     let favImgs = document.querySelectorAll(".card-like")

//     favImgs.forEach((favImg) => {
//         let sneakersId = favImg.dataset.sneakersId;
//         if (likeSneakers.some((sneaker) => sneaker.sneakerId === sneakersId)) {
//             favImg.src = '../imges/like-2.svg'
//         }
//     })
// }


// fetchData("https://5c782080f150df17.mokky.dev/items").then((data) => {
//     let favImgs = document.querySelectorAll(".card-like")
//     renderSneaker(data),



//         fetch('https://faf951d931ac4945.mokky.dev/f')
//             .then((response) => response.json())
//             .then((likeSneakers) => {
//                 renderlikeSneakers(likeSneakers);
//             })
//             .catch((error) => {
//                 console.log('E:', error)
//             });
// });

// let arrey;
// let likedArray;


// fetchData('https://5c782080f150df17.mokky.dev/items').then((data) => {
//     arrey = data;
//     console.log(array);
// });
// fetchData('https://faf951d931ac4945.mokky.dev/f').then((data) => {

// })