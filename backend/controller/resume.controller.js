const fs = require("fs");
const Pdf = require("../models/pdf.models");
function getpdffile(req, res) {
    try {
        const filepath = Pdf.getPdfFile();

        if (!fs.existsSync(filepath)) {
            return res.status(404).json({
                error: "PDF not found"
            });
        }
        
        res.set({
            "Content-Type": "application/pdf",
            "Cache-Control": "no-store"
        });

        res.sendFile(filepath);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Server Error"
        });
    }
}

module.exports = {getpdffile}