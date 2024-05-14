import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {type: String, required: true},
  name: {type: String, required: true},
  PhoneNumber: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  username: {type: String, required: true, unique: true},
  createdAtUser: {type: Date, required: true},
  threads : [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread"
    }
  ],
  onBoarded: {type: Boolean, default: false},
  communities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community"
    }
  ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;