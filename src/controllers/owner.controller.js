const ownerService = require("../services/owner.service");
const { success } = require("../utils/response");

exports.getOwners = (req, res) => {
  const owners = ownerService.getOwners(req.query.sort);
  success(res, owners);
};

exports.getOwner = (req, res) => {
  const owner = ownerService.getOwner(req.params.id);
  if (!owner) throw new Error("Owner Not Found");
  success(res, owner);
};

exports.setMaster = (req, res) => {
  const result = ownerService.setMaster(req.params.id);
  success(res, result);
};
