const ownerModel = require("../models/owner.model");

exports.getOwners = (sort) => {
  let owners = ownerModel.getOwners();

  if (sort === "name") owners.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "cats") owners.sort((a, b) => b.cats.length - a.cats.length);

  return owners;
};

exports.getOwner = (id) => ownerModel.getOwnerById(id);

exports.setMaster = (id) => {
  let owners = ownerModel.getOwners();
  owners = owners.map((o) => ({ ...o, isMaster: o.id == id }));
  ownerModel.saveOwners(owners);
  return { message: "Master updated" };
};
