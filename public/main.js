document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded');

    const temperatureElement = document.querySelector(".temperature");
    const weatherConditionElement = document.querySelector(".weatherCondition");
    const locationElement = document.querySelector(".location");
    const dateElement = document.querySelector(".date");
    const buttonElement = document.querySelector("#button");
    const searchButtonElement = document.querySelector("#outfit");

    console.log(buttonElement);
    // buttonElement.addEventListener("click", function(){ console.log("Hello World!"); });
    buttonElement.addEventListener("click", function () {
        console.log('button clickes');
        fetch('/weather')
            .then(data => data.json())
            .then(data => {
                console.log('front end test:', data);
                console.log('condition', data.current.condition.text);
                temperatureElement.innerHTML = `${data.current.temp_f} ˚ F`;
                weatherConditionElement.innerHTML = data.current.condition.text;
                locationElement.innerHTML = data.location.name;
                dateElement.innerHTML = data.location.localtime;
                document.getElementById("img").src = data.current.condition.icon
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    });

    searchButtonElement.addEventListener("click", function () {
        console.log('Outfit button clickes')
        document.getElementById("outfitOne").src = 'https://em3s32n78d8.exactdn.com/wp-content/uploads/Korean-Mens-Outfit-709x930.png?strip=all&lossy=1&ssl=1';
        document.getElementById("outfitTwo").src = 'https://i.pinimg.com/originals/67/74/3f/67743fcffe11383765362d6507578fa5.jpg';
        document.getElementById("outfitThree").src = 'https://cdn.shopify.com/s/files/1/0012/7339/7332/files/9245272d50d53fb7694b4a30bbc84647_6820db9b-c04b-4db0-943c-5570409bb0a9_1024x1024.jpg?v=1618922191';
        document.getElementById("outfitFour").src = 'https://i.pinimg.com/736x/61/30/2e/61302e83a31325e225036ddff3fa987b.jpg';
    })

});


