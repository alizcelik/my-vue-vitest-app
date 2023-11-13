import { it, expect } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

it("should render the msg property", () => {
  const instance = mount(HelloWorld, {
    props: {
      msg: "My First Test",
    },
  });

  expect(instance.find("h1").text()).toBe("My First Test");
});

it("should increment the count when the increment method is called", () => {
  const instance = mount(HelloWorld);

  instance.vm.increment();

  expect(instance.vm.count).toBe(1);
});

it("should increment the count when the button clicked", async () => {
  const instance = mount(HelloWorld);

  const button = instance.find("button");

  await button.trigger("click");

  expect(button.text()).toBe("count is 1");
});
