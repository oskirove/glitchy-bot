const mongoose = require('mongoose');

const guildSchema = new mongoose.Schema({
  guildId: { type: String, required: true, unique: true }, // ID del servidor
  voiceChannelIds: [
    {
      channelId: { type: String, required: true }, // ID del canal predeterminado
      type: { type: String, required: true, enum: ['charleta', 'juego'] }, // Tipo del canal predeterminado
    },
  ], // Lista de canales predeterminados con su tipo (máximo 10)
  categoryId: { type: String, required: true }, // ID de la categoría para los canales temporales
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Guild', guildSchema);
