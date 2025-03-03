<?php
session_start(); // تفعيل الجلسات

// بيانات تسجيل الدخول (مثال)
$valid_username = "admin";
$valid_password = "password123";

// استقبال البيانات من النموذج
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // تحقق من البيانات
    if ($username === $valid_username && $password === $valid_password) {
        $_SESSION['user'] = $username;
        header("Location: dashboard.php"); // إعادة التوجيه إلى لوحة التحكم
        exit();
    } else {
        echo "<script>alert('اسم المستخدم أو كلمة المرور غير صحيحة!');</script>";
    }
}
?>
