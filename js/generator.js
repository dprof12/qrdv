function attractiveQR_Generator(element,userInput){
    const qrcode=new QRCodeStyling({
        width:250,
        height:250,
        data:userInput,
        // image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjirKW_GaJnqwq1NjHFGPX9XdjBr4Ic-DGEdLdDQ&s',
        
        
    });
    qrcode.append(element);
}


function simpleGenerator(element,userInput){
    let qrcode = new QRCode(element, {
        text: userInput ? userInput : 'tes',
        width: 250,
        height: 250,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}

