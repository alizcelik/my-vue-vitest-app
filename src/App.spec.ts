import { shallowMount, mount } from "@vue/test-utils";
import App from "./App.vue";
import { it, expect } from "vitest";

it("should render the content of the Hello World", () => {
  const instance = shallowMount(App);

  expect(instance.html()).toContain("fficial Vue");
});
