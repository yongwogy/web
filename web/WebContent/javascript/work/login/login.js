function check() {
	var id = document.getElementById("id");
	var passwd = document.getElementById("passwd");
	if (id.value == "") {
		alert("ID를 입력하세요.");
		id.focus();
		return false;
	}
	if (passwd.value == "") {
		alert("비번을 입력하세요.");
		passwd.focus();
		return false;
	}
}