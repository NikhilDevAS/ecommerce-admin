const { models, model } = require('mongoose');
const { Schema, default: mongoose } = require('mongoose');

const RateSchema = new Schema(
  {
    gstRate: { type: Number, default: 0 },
  },

  {
    timestamps: true,
  }
);

export const Rate = models.Rate || model('Rate', RateSchema);
