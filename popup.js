document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const generateBtn = document.getElementById("generateBtn");
    const canvas = document.getElementById("outputCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 150;

    generateBtn.addEventListener("click", function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "white";
        ctx.font = "16px Arial";
        ctx.textAlign = "center";
        ctx.fillText("【放送事故】", canvas.width / 2, 30);
        
        let lines = textInput.value.split("\n");
        ctx.font = "14px Arial";
        lines.forEach((line, index) => {
            ctx.fillText(line, canvas.width / 2, 60 + index * 20);
        });
    });
});
