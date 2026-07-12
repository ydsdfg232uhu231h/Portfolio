const path = require("path");
class Pdf{
    static getPdfFile(){
        return path.join(__dirname, "../../backend/Data/resume.pdf");
    }
}
module.exports = Pdf;