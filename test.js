var retext = require('retext');
var shopify = require('./index');
var report = require('vfile-reporter');

retext()
    .use(shopify)
    .process([
        'I love using Liquid once the.',
        'I love using liquid.',
        'I\'m on the Shopify unlimited Plan',
        'I\'m on the Shopify Unlimited plan',
        'I\'m on the Shopify UnLimited plan',
        'I love Shopify point of sale',
        'I love shopify point of sale',
        'Unfortunately, I need to close down, i.e., customise my drink',
        'Oops, I need to Customise my drink with the shopify manual',
        '!'
    ].join('\n'), function (err, file) {
        console.log(report(file));
    });
