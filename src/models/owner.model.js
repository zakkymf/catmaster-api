const db = require("../config/database");

exports.getOwners = () => db.read();
exports.saveOwners = (owners) => db.write(owners);
exports.getOwnerById = (id) => db.read().find((o) => o.id == id);
