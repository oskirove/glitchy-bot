const mongoose = require('mongoose');

const temporaryChannelSchema = new mongoose.Schema({
  channelId: { type: String, required: true, unique: true }, // ID del canal creado
  guildId: { type: String, required: true }, // ID del servidor
  userId: { type: String, required: true }, // ID del usuario que creó el canal
  userName: { type: String, required: true }, // Nombre del usuario (para facilitar debugging)
  type: { type: String, required: true, enum: ['charleta', 'juego'] }, // Tipo de canal creado
  createdAt: { type: Date, default: Date.now }, // Fecha de creación del canal
  expiresAt: { type: Date }, // Fecha de expiración (si es necesario)
});

module.exports = mongoose.model('TemporaryChannel', temporaryChannelSchema);
