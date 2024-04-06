const btn = document.querySelector("button");

        function change() {
            const input = document.querySelector("input");
            input.style.transform = "scale(1.15)";
            input.style.borderLeft = "1px solid rgb(75, 75, 75)";
            input.style.borderTop = "1px solid rgb(75, 75, 75)";
            input.style.borderBottom = "2px solid rgb(75, 75, 75)";
            input.style.borderRight = "2px solid rgb(75, 75, 75)";
        }

        function startTest() {
            const input = document.querySelector("input");
            const scor = document.querySelector(".sco");
            const wron = document.querySelector(".wrong");
            const timer = document.querySelector(".timer");
            let count = 60;

            btn.disabled = true;
            input.disabled = false;
            scor.innerText = '';
            wron.innerText = '';
            input.value = '';

            const intervalId = setInterval(() => {
                if (count === 0) {
                    clearInterval(intervalId);
                    timer.innerText = "Time is Over";
                    btn.disabled = false;
                    input.disabled = true;
                } else {
                    count--;
                    timer.innerText = count + " " + "sec";
                }
            }, 1000);
        }

        const textInput = document.querySelector("input");
        const paragraph = document.querySelector("p");
        const scor = document.querySelector(".sco");
        const wron = document.querySelector(".wrong");

        textInput.addEventListener("input", function () {
            const inputText = textInput.value;
            const words = paragraph.innerText.split(' ');
            const inpu = inputText.split(' ');

            var score = 0;
            var wrong = 0;

            for (let i = 0; i < words.length; i++) {
                if (i < inputText.split(' ').length) {
                    if (words[i] == inpu[i]) {
                        words[i] = `<span style="color: white; background-color: green;">${words[i]}</span>`;
                        score++;
                    } else if (words[i] != inpu[i]) {
                        words[i] = `<span style="color: white; background-color: black;">${words[i]}</span>`
                        wrong++
                    }
                } else {
                    words[i] = `<span style="color: black">${words[i]}</span>`;
                }
            }

            paragraph.innerHTML = words.join(' ');
            scor.innerText = score + " " + "words" + " " + "/min";
            wron.innerText = "No. of wrong words are" + " " + wrong;
        });