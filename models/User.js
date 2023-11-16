const { Schema, models, model, default: mongoose } = require('mongoose');

const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

export const User = models.User || model('User', UserSchema);
