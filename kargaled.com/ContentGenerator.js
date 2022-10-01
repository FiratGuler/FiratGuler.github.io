const menu = [
  {
    id: 1,
    title: "Title",
    category: "Dog",
    img: "https://picsum.photos/id/237/100/50",
    desc: `Cok uzun acıklamalar`,
  },
  {
    id: 2,
    title: "Title",
    category: "Dog",
    img: "https://picsum.photos/id/237/100/50",
    desc: `Cok uzun acıklamalar`,
  },
  {
    id: 3,
    title: "Title",
    category: "Dog",
    img: "https://picsum.photos/id/237/100/50",
    desc: `Cok uzun acıklamalar`,
  },
  {
    id: 4,
    title: "Title",
    category: "Dog",
    img: "https://picsum.photos/id/237/100/50",
    desc: `Cok uzun acıklamalar`,
  },
  {
    id: 1,
    title: "Title",
    category: "Dog",
    img: "https://picsum.photos/id/237/100/50",
    desc: `Cok uzun acıklamalar`,
  },
  {
    id: 2,
    title: "Title",
    category: "Dog",
    img: "https://picsum.photos/id/237/100/50",
    desc: `Cok uzun acıklamalar`,
  },
  {
    id: 3,
    title: "Title",
    category: "Dog",
    img: "https://picsum.photos/id/237/100/50",
    desc: `Cok uzun acıklamalar`,
  },
  {
    id: 4,
    title: "Title",
    category: "Dog",
    img: "https://picsum.photos/id/237/100/50",
    desc: `Cok uzun acıklamalar`,
  },
  {
    id: 1,
    title: "Title",
    category: "Dog",
    img: "https://picsum.photos/id/237/100/50",
    desc: `Cok uzun acıklamalar`,
  },
  {
    id: 2,
    title: "Title",
    category: "Dog",
    img: "https://picsum.photos/id/237/100/50",
    desc: `Cok uzun acıklamalar`,
  },
  {
    id: 3,
    title: "Title",
    category: "Dog",
    img: "https://picsum.photos/id/237/100/50",
    desc: `Cok uzun acıklamalar`,
  },
  {
    id: 4,
    title: "Title",
    category: "Dog",
    img: "https://picsum.photos/id/237/100/50",
    desc: `Cok uzun acıklamalar`,
  },
  {
    id: 1,
    title: "Title",
    category: "Dog",
    img: "https://picsum.photos/id/237/100/50",
    desc: `Cok uzun acıklamalar`,
  },
  {
    id: 2,
    title: "Title",
    category: "Dog",
    img: "https://picsum.photos/id/237/100/50",
    desc: `Cok uzun acıklamalar`,
  },
  {
    id: 3,
    title: "Title",
    category: "Dog",
    img: "https://picsum.photos/id/237/100/50",
    desc: `Cok uzun acıklamalar`,
  },
  {
    id: 4,
    title: "Title",
    category: "Dog",
    img: "https://picsum.photos/id/237/100/50",
    desc: `Cok uzun acıklamalar`,
  },
];

let menuDOM = document.querySelector('.contens')

const createProducts = (content) => {
  let html = `
    <div class="menu-items col-6 col-lg-3 pt-5">
    <div class="card" >
        <img src="${content.img}" class="card-img-top" alt="${content.title}">
            <div class="card-body p-0">
                <h5 class="card-title">${content.title}</h5>
                <p class="card-text">${content.desc}</p>

                
                <div class="d-sm-block">
                <button class="btn btn-dark w-50  rounded-0  border-end-1 border-dark" type="button">Trendyol</button>
                <button class="btn btn-danger w-50 float-end  rounded-0" type="button">Hepsiburada</button>
              </div>
                    
            </div>
    </div>
</div>  
    `
  return html;
}
const pushContent = (filt) => {
  let allContents = "";
  menu.map(item => {
    allContents += createProducts(item)
  })
  menuDOM.innerHTML = allContents;
}

document.addEventListener("DOMContentLoaded", pushContent);