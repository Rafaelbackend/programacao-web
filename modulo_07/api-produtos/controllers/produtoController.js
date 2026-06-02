const Produto = require('../models/Produto');

exports.getProdutos = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, nome, categoria, sort } = req.query;

    const filtro = {};

    if (categoria) filtro.categoria = categoria;

    if (nome) {
      filtro.nome = { $regex: nome, $options: 'i' }; // desafio
    }

    let query = Produto.find(filtro);

    if (sort) {
      query = query.sort(sort.split(',').join(' ')); // múltiplos campos
    }

    const produtos = await query
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(produtos);
  } catch (error) {
    next(error);
  }
};

exports.createProduto = async (req, res, next) => {
  try {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
  } catch (error) {
    next(error);
  }
};