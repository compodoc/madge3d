const madge = require('madge'),
    fs = require('fs-extra');

var args = process.argv.slice(2);

madge(args[0], {
    fileExtensions: ['ts']
}).then((res) => {
    let tree = res.obj();
    let finalData = {
        nodes: [],
        links: []
    };

    for (var prop in tree) {
        finalData.nodes.push({
            id: prop
        })
        let originalTargets = tree[prop],
            i = 0,
            len = originalTargets.length;
        for (i; i < len; i++) {
            finalData.links.push({
                source: originalTargets[i],
                target: prop
            });
        }
    }

    fs.copy('./resources', './dist', err => {
        if (err) return console.error(err)

        fs.outputJson('dist/data.json', finalData, err => {
            if (err) return console.error(err);

            console.log('Generation complete !')
        });
    });
});
