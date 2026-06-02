const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    index: true
  },
  preco: {
    type: Number,
    required: true
  },
  categoria: {
    type: String,
    enum: ['eletronico', 'roupa', 'alimento'],
    required: true
  },
  fornecedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fornecedor'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Produto', ProdutoSchema);