
const controller = require("./controller/logic/facult.controller")

module.exports = (app) => {
    app.get("/facult", (req, res, next ) => {
        controller.getAll(req, res, next);
    });

    app.get("/facult/bydocument/:document", (req, res, next ) => {
        controller.getByDocument(req, res, next);
    });
    
    app.post("/facult", (req, res, next ) => {
        controller.createFacult(req, res, next);
    });

    app.put("/facult", (req, res, next ) => {
        controller.updateFacult(req, res, next);
    });

    app.delete("/facult", (req, res, next ) => {
        controller.deleteFacult(req, res, next);
    });
}