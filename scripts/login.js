let username_1 = "thanhtran@gmail.com";
let password_1 = "thanhdeptrai1234";
function check() {
    let input_email = document.getElementById('input-email').value;
    let input_password = document.getElementById("input-password").value;

    console.log(input_email);
    console.log(input_password);

    if (input_email == username_1 && input_password == password_1)
        window.location.href = "http://shopuytinnhatthegioi.somee.com/pages/index.html";
    else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.");
    }
}