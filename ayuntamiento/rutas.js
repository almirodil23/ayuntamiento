const express = require('express');
const router = express.Router();
const proovedores = require('./proovedores')


router.get('/', proovedores.getProovedores)

router.get('/:cif', proovedores.getProovedoreByCif)

router.post('/', proovedores.postProovedor)

router.put('/', proovedores.putProovedor)

router.delete('/:cif', proovedores.deleteProovedor)


module.exports = router;
