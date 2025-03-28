document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const generateBtn = document.getElementById("generateBtn");
    const saveBtn = document.getElementById("saveBtn");
    const canvas = document.getElementById("outputCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 400;
    canvas.height = 200;

    // 背景画像の読み込み
    const background = new Image();
    background.src = "background.jpg";  // 背景画像ファイル

    generateBtn.addEventListener("click", function () {
        background.onload = function () {
            // 背景画像を描画
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            // テキストを描画
            ctx.fillStyle = "white";
            ctx.font = "bold 18px Arial";
            ctx.textAlign = "center";
            ctx.fillText("【放送事故】", canvas.width / 2, 40);

            let lines = textInput.value.split("\n");
            ctx.font = "16px Arial";
            lines.forEach((line, index) => {
                ctx.fillText(line, canvas.width / 2, 80 + index * 24);
            });
        };
    });

    // 画像を保存するボタン
    saveBtn.addEventListener("click", function () {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "broadcast_error.png";
        link.click();
    });
});
