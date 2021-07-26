var express = require('express');
var router = express.Router();
var index = require('../controllers/index_controller');

// get
router.get('/', index.index);
router.get('/:id', index.indexById);
// post
router.post('/', index.inserir);

// put
router.put('/:id', index.editar);

// delete
router.delete("/:id", index.remover);



module.exports = router;