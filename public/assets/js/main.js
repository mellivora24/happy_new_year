function getRandomTetWish() {
    const wishesArray = [
        "Chúc mừng năm mới, an khang thịnh vượng!",
        "Năm mới nhiều tiền nha bro!!!",
        "Năm mới, phúc lộc đầy nhà!",
        "Sức khỏe dồi dào, công việc thuận lợi!",
        "Chúc gia đình bạn đón năm mới tràn đầy niềm vui!",
        "Năm mới vui vẻ, hạnh phúc bên gia đình và bạn bè!",
        "Chúc bạn trước màn hình sớm có người yêu nha ❤️"
    ];

    const randomIndex = Math.floor(Math.random() * wishesArray.length);
    return wishesArray[randomIndex];
}

function displayRandomWish() {
    const isShowed = document.getElementById('gray-layout');

    if (isShowed.classList.contains("hide")) {
        isShowed.classList.remove("hide");
        isShowed.classList.add("show");
    }

    const res = getRandomTetWish();
    const message = document.getElementById('wish-message');
    message.innerText = res;
}

const button = document.getElementById('btn');
button.addEventListener("click", displayRandomWish);