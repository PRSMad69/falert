falert
======

A simple jquery-based alert popup, styled to look like Firefox's default Alert with Chrome-style buttons.

Use as shown below:

	
	falert("Message to show goes here", "Confirm Button Text", "Cancel Button Text", function(){/*Callback Function Goes Here, if any*/});
	

If 'Cancel Button Text' is not provided, or skipped over with "" then no cancel button will be rendered - allowing for an "OK only" message.