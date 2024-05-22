const buttons = document.querySelectorAll('.apc_button');
const bittonsImg = document.querySelectorAll('.apc_button img')
const description = document.querySelector('.apc_description');
const curImg = document.querySelector('.apc__container-content img');

const data = [
    {
        buttonImgSrc: "../img/a-b-1.svg",
        buttonImgSrcNote: "../img/a-b-1-n.svg",
        bigImg: "../img/a-b-1.png",
        descript: "Мониторинг атмосферы и промышленных выбросов"
    }, 
    {
        buttonImgSrc: "../img/a-b-2.svg",
        bigImg: "../img/a-b-2.png",
        buttonImgSrcNote: "../img/a-b-2-n.svg",
        descript: "Элементный и изотопный анализ"
    }, 
    {
        buttonImgSrc: "../img/a-b-3.svg",
        bigImg: "../img/a-b-3.png",
        buttonImgSrcNote: "../img/a-b-3-n.svg",
        descript: "Хроматография и масспектрометрия"
    }, 
    {
        buttonImgSrc: "../img/a-b-4.svg",
        bigImg: "../img/a-b-4.png",
        buttonImgSrcNote: "../img/a-b-4-n.svg",
        descript: "Молекулярный анализ"
    }, 
    {
        buttonImgSrc: "../img/a-b-5.svg",
        bigImg: "../img/a-b-5.png",
        buttonImgSrcNote: "../img/a-b-5-n.svg",
        descript: "LIMS"
    }, 
    {
        buttonImgSrc: "../img/a-b-6.svg",
        bigImg: "../img/a-b-6.png",
        buttonImgSrcNote: "../img/a-b-6-n.svg",
        descript: "Анализ в управлении технологическими процессами"
    }, 
    {
        buttonImgSrc: "../img/a-b-7.svg",
        bigImg: "../img/a-b-7.png",
        buttonImgSrcNote: "../img/a-b-7-n.svg",
        descript: "Общелабораторное оборудование"
    }, 
];

function buttonHandler(index) {
    buttons.forEach((item) => {
        item.dataset.active = "false"
    })

    curImg.src = data[index].bigImg;
    description.textContent = data[index].descript;
    bittonsImg[index].src = data[index].buttonImgSrc;
    buttons[index].dataset.active = "true";
}

function activeHandler() {
    buttons.forEach((item, index) => {
        if (item.dataset.active == "false") {
            bittonsImg[index].src = data[index].buttonImgSrcNote;
        }
    })
}

buttons.forEach((item, index) => {
    item.addEventListener("mouseover", () => buttonHandler(index));
    item.addEventListener("mouseover", () => activeHandler(index));
})