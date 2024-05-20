import { CATALOG_ROUTE, FORM_ROUTE, MAIN_ROUTE, PROFILE_ROUTE } from "./config";
describe("Config test", () => {
  test("данные в конфиге верные", () => {
    expect(CATALOG_ROUTE).toBe("/catalog");
    expect(FORM_ROUTE).toBe("/form");
    expect(MAIN_ROUTE).toBe("/");
    expect(PROFILE_ROUTE).toBe("/profile");
  });
});
