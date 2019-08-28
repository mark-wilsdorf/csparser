const path = require("path");
const fs = require("fs");

const fileSort = (x, y) => {
    if (x.isDirectory()) return 1;
    if (y.isDirectory()) return -1;
    return 0;
};

class Pathfinder {
    constructor (extension) {
        this.extension = extension;
    }

    findPaths(url, deepSearch = false, paths = []) {
        const files = fs.readdirSync(url, {withFileTypes: true});
        files.sort(fileSort);
        files.forEach(file => {
            const newUrl = path.join(url, file.name);
            if (file.isDirectory() && deepSearch) this.findPaths(newUrl, paths);
            if (file.isFile() && path.extname(newUrl) === this.extension) paths.push(newUrl);
        });
        return paths;
    };
}

module.exports = Pathfinder;


