const svgFlatten = require('svg-flatten')

module.exports = (app) => {
    var router = require("express").Router();

    router.post('/flatten_app', (req, res) => {
        console.log(req.body.dom);
        const modifiedSvgString = svgFlatten(req.body.dom).pathify().value();
        let value = svgFlatten(modifiedSvgString).flatten();
        console.log(value._value.attr);
        const radius = 20;
        value._value.attr.viewbox = `95 -${radius/2} 10 ${200 + radius}`;
        res.send(value.value());
    })

    app.use('', router);
};
