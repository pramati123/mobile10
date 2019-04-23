var $el = $;
'use strict';
var _renderQRCode;

function renderQRCode() {
    var qrele = $el.find('[name="qrcode"]')[0];
    var QRErrorCorrectLevel = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    };

    qrele.innerHTML = '';
    var qrcode = new QRCode(qrele, {
        'width': Prefab.width,
        'height': Prefab.height,
        'typeNumber': Prefab.type,
        'colorDark': Prefab.darkcolor,
        'colorLight': Prefab.lightcolor,
        'correctLevel': QRErrorCorrectLevel[Prefab.level]
    });

    qrcode.makeCode(Prefab.text);
}
_renderQRCode = _.debounce(renderQRCode, 100);

function propertyChangeHandler() {
    _renderQRCode();
}
Prefab.onPropertyChange = propertyChangeHandler;
Prefab.onReady = _renderQRCode;
