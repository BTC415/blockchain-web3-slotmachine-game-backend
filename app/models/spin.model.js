module.exports = (mongoose) => {
    var schema = mongoose.Schema(
      {
        walletAddress: String,
        balance:Number,
        bonus:Number
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Spin = mongoose.model("spin", schema);
    return Spin;
  };
  