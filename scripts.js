// scripts.js 文件

// 获取按钮和消息元素
const button = document.getElementById('showMessageButton');
const message = document.getElementById('message');

// 为按钮添加点击事件监听器
button.addEventListener('click', () => {
    // 显示隐藏的消息
    message.style.display = 'block';
    hideButton();
    let sound = new Audio("click.mp3");
        sound.play();
});

function hideButton() {
    document.getElementById("showMessageButton").style.display = "none";
}

