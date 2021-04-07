$(document).ready(function() {
	$("form").submit(function() {

		if ($("#writer").val() == "") {
			alert("작성자를 입력하세요");
			$("#writer").focus();
			return false;
		}
		if ($("#passwd").val() == "") {
			alert("비밀번호를 입력하세요");
			$("#passwd").focus();
			return false;
		}
		if ($("#passwd").val().length < 2 || $("#passwd").val().length > 8) {
			alert("비밀번호 2~8자 이내로 입력하세요");
			$("#passwd").val("");
			$("#passwd").focus();
			return false;
		}
		if ($("#subject").val() == "") {
			alert("제목을 입력하세요");
			$("#subject").focus();
			return false;
		}
		if ($("#subject").val().length > 50) {
			alert("제목을 50자 이내로 입력하세요");
			$("#subject").val("").focus();
			return false;
		}
		if ($("#content").val() == "") {
			alert("내용을 입력하세요");
			$("#content").focus();
			return false;
		}
		if ($("#content").val().length > 200) {
			alert("내용을 200자 이내로 입력하세요");
			alert($("#content").val().length+"자");
			$("#content").focus();
			return false;
		}

	});
});