import { Department } from "@/sequelize/models";

export const list = (req, res, next) => {
  const getDepartments = async () =>
    await Department.findAll({ attributes: ["id", "name"] });
  const respond = departments => res.json(departments);
  const onError = error => {
    console.log("error.message", error.message);
    error.status = 409;
    next(error);
  };

  getDepartments()
    .then(respond)
    .catch(onError);
};
