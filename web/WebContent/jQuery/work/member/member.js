$(document).ready(function(){
		
		// ID중복검사
		$("#idcheck").click(function(){
			if($("#id").val() == ""){
				alert("ID를 입력하새요");
				$("#id").focus();
				return false;
			}else{
				//open("팝업창에 실행될 문서명","윈도우 이름","옵션")
				var ref="idcheck.jsp?id="+$("#id").val();
				window.open(ref,"mywin","width=250,height=150");
			}
		});
		
		// 주민번호 뒷자리로 포커스 이동
		$("#jumin1").keyup(function(){
			if($("#jumin1").val().length == 6)
				$("#jumin2").focus();
		});
		
		// 도메인 선택
		$("#email").change(function(){
			if($("#email").val() == ""){ //직접입력 선택
				$("#domain").attr("readOnly",false);
//				$("#domain").removeAttr("readOnly");
				$("#domain").val("").focus();
			}else{  //도메인입력 선택
				$("#domain").val($("#email").val());
				$("#domain").attr("readOnly","readOnly")
			}
		});
		
		// 유효성 검사
		$("form").submit(function(){
			if($("#id").val() == ""){
				alert("ID를 입력하세요");
				$("#id").focus();
				return false;
			}
			if($("#passwd").val() == ""){
				alert("비밀번호를 입력하세요");
				$("#passwd").focus();
				return false;
			}
			if($("#name").val() == ""){
				alert("이름을 입력하세요");
				$("#name").focus();
				return false;	
			}
			if($("#jumin1").val() == ""){
				alert("주민번호 앞자리를 입력하세요");
				$("#jumin1").focus();
				return false;	
			}
			if($("#jumin1").val().length != 6){
				alert("주민번호 앞자리 6자리를 입력하세요");
				$("#jumin1").val("").focus();
				return false;	
			}
			if(isNaN($("#jumin1").val())){
				alert("숫자만 입력하세요");
				$("#jumin1").val("").focus();
				return false;	
			}
			if($("#jumin2").val() == ""){
				alert("주민번호 뒷자리를 입력하세요");
				$("#jumin2").focus();
				return false;	
			}
			if($("#jumin2").val().length != 7){
				alert("주민번호 뒷자리 7자리를 입력하세요");
				$("#jumin2").val("").focus();
				return false;	
			}
			if(isNaN($("#jumin2").val())){
				alert("숫자만 입력하세요");
				$("#jumin2").val("").focus();
				return false;	
			}
			if($("#emailid").val() == ""){
				alert("Email주소를 입력하세요");
				$("#emailid").focus();
				return false;	
			}
			if($("#domain").val() == ""){
				alert("도메인명을 입력하세요");
				$("#domain").focus();
				return false;	
			}
			if($("#tel1").val() == ""){
				alert("전화번호 앞자리를 입력하세요");
				$("#tel1").focus();
				return false;	
			}
			if(isNaN($("#tel1").val())){
				alert("숫자만 입력하세요");
				$("#tel1").val("").focus();
				return false;	
			}
			if($("#tel2").val() == ""){
				alert("전화번호 중간자리를 입력하세요");
				$("#tel2").focus();
				return false;	
			}
			if(isNaN($("#tel2").val())){
				alert("숫자만 입력하세요");
				$("#tel2").val("").focus();
				return false;	
			}
			if($("#tel3").val() == ""){
				alert("전화번호 끝자리를 입력하세요");
				$("#tel3").focus();
				return false;	
			}
			if(isNaN($("#tel3").val())){
				alert("숫자만 입력하세요");
				$("#tel3").val("").focus();
				return false;	
			}
			if($("#phone1").val() == ""){
				alert("휴대폰 앞자리를 선택하세요");
				$("#phone1").focus();
				return false;	
			}
			if($("#phone2").val() == ""){
				alert("휴대폰 중간자리를 입력하세요");
				$("#phone2").focus();
				return false;	
			}
			if(isNaN($("#phone2").val())){
				alert("숫자만 입력하세요");
				$("#phone2").val("").focus();
				return false;	
			}
			if($("#phone3").val() == ""){
				alert("휴대폰 끝자리를 입력하세요");
				$("#phone3").focus();
				return false;	
			}
			if(isNaN($("#phone3").val())){
				alert("숫자만 입력하세요");
				$("#phone3").val("").focus();
				return false;	
			}
			if($("#post").val() == ""){
				alert("우편번호를 입력하세요");
				$("#post").focus();
				return false;	
			}
			if($("#address").val() == ""){
				alert("주소를 입력하세요");
				$("#address").focus();
				return false;				
			}
			if($("#male").is(":checked")==false &&  
					$("#female").is(":checked")==false){
				alert("성별을 선택하세요");
				return false;
			}
			
// 			var cnt=0;
//			if($("#h1").is(":checked")) cnt++;
//			if($("#h2").is(":checked")) cnt++;
//			if($("#h3").is(":checked")) cnt++;
//			if($("#h4").is(":checked")) cnt++;
//			if($("#h5").is(":checked")) cnt++;
			
//			if(cnt < 2){
//				alert("취미를 2개이상 입력하세요");
//				return false;
//			} 

			if($("input:checkbox[name='hobby']:checked").length < 2){
				alert("취미를 2개이상 입력하세요");
				return false;
			}
			
			if($("#intro").val() == ""){
				alert("자기소개를 입력하세요");
				$("#intro").focus();
				return false;	
			}
			if($("#intro").val().length > 100){
				alert("자기소개를 100자 이내로 입력하세요");
				$("#intro").focus();
				return false;	
			}
		});
	});