function falert(message, confirmButtonText, cancelButtonText, confirmCallback) {

    var $container = $('<div class="falert-container"></div>');
    var $messageContainer = $('<div class="falert-messageContainer"></div>');
    var $message = $('<p></p>');
    var $buttonContainer = $('<div class="falert-buttonContainer"></div>');
    var $button = $('<button class="falert-btn falert-confirm"></button>');
    var $cancelButton = $('<button class="falert-btn" style="margin-left:5px;"></button>');
    var $overlay = $('<div class="falert-overlay"></div>');
    

    $message.html(message);

    $button.text(confirmButtonText);
    $messageContainer.append($message);
    $buttonContainer.append($button);
    $container.append($messageContainer).append($buttonContainer);

    if (cancelButtonText !== undefined && cancelButtonText !== "" && cancelButtonText !== null ) {
        $cancelButton.text(cancelButtonText);
        $buttonContainer.append($cancelButton);
    }


    $('body').append($overlay).append($container);



    $button.click(function() {
        $container.remove();
        $overlay.remove();
        
        if (confirmCallback !== undefined) {
            confirmCallback();
        }

        
    });
    
    $cancelButton.click(function () {
        $container.remove();
        $overlay.remove();
    });

}
