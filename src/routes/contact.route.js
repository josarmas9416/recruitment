const { Router } = require("express");
module.exports = function({ ContactController }){
    const router = Router();
    router.get("", ContactController.getAll)
    router.get("/:userId", ContactController.get);
    router.post("/", ContactController.create);
    router.patch("/", ContactController.update);
    router.delete("/:userId", ContactController.delete);
    return router;
}
