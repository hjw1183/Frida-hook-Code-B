setImmediate(function(){
	Java.perform(function(){
	var certfication_info = Java.use('com.example.ExampleSolution');
		certfication_info.ExampleCertInfo.overload('java.lang.String','java.lang.String').implementation = function(arg1,arg2){
			console.log("[*] certfication info"+arg1+arg2);			
			return this.ExampleCertInfo("cn=ooo()001111111111111111111111,ou=NACF,ou=licensedCA,o=KICA,c=KR","getvidinfo");
			
			console.log("[*] test"+ExampleCertInfo);
			
		}
	})
})


setImmediate(function(){
	Java.perform(function(){
		var certfication_login_bypass = Java.use("com.example.ExampleSolution");
		certfication_login_bypass.ExampleCertInfoEncEx.implementation = function(a,b,c,d,e){
			console.log("[*] Exit Bypass");
			
			if(c.indexOf('"sign":""','"vid":""')>=0){
				console.log("[*] certfication login bypass");
				c=c.replace('"sign":"sign값"');
				c=c.replace('"vid":"vid값"');
			}
			console.log(c);
			return this.ExampleCertInfoEncEx(a,b,c,d,e);
		}
	})
})



			
