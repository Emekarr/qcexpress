const { Router } = require("express");
const business_admin_controller = require("../../app/business/cotrollers/busiess_admin_controller");
const onboarding_controller = require("../../app/business/cotrollers/onboarding_request_controller");
const business_admin = require("../../middlewares/businessAdminAuth");

const router = Router();

router.post("/login", business_admin_controller.loginBusinessAdmin);

router.get(
  "/tokens/expose",
  business_admin(),
  business_admin_controller.exposeAPIKeys
);

router.post(
  "/user/create",
  business_admin(),
  onboarding_controller.createBusinessUser
);

router.get(
  "/user/fetch",
  business_admin(),
  onboarding_controller.listBusinessUser
);

router.delete(
  "/user/delete",
  business_admin(),
  onboarding_controller.deleteUser
);

router.get("/kpis", business_admin(), business_admin_controller.fetchKPIs);

router.delete(
  "/sandbox/clear",
  business_admin(),
  business_admin_controller.deleteSandBoxData
);

module.exports = router;