
    InboxSDK.load(2, 'sdk_namespeller_a47dd64878').then(function(sdk){

        // the SDK has been loaded, now do something with it!
        sdk.Compose.registerComposeViewHandler(function(composeView){
            composeView.on('presending', event => {
                var receipient = composeView.getToRecipients()
                var firstName = receipient[0].name.split(' ')[0]
                var sentence = composeView.getTextContent(); 
                var words = sentence.split(/,| |\n/);
                
                if ((words[0] === 'Hi' || words[0] === 'Hello' || words[0] === 'Hey') && words[1] !== firstName) {
                    var r = confirm('The name of the prospect you used does not match. Are you sure you want to send this email?');
                    if (r == false) {
                        event.cancel();
                    }
                    console.log('There in NO match')
                } else {
                    console.log(" There is a match")
                }
            });
        })

            composeView.on('destroy', function(event) {
                console.log('compose view going away, time to clean up');
        });
    });
