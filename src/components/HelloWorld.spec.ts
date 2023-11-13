import { it, expect, describe, vi } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";
import axios from "axios";

vi.mock("axios");

describe("First Part", () => {
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
}); // end of describe

describe("Hello World test suites", () => {
  //   global.fetch = vi.fn();

  //   it(" should make a fetch call using correct url depending on msg property", async () => {
  //     //given the component is mounted
  //     const instance = shallowMount(HelloWorld);
  //     //when the mes property changes
  //     await instance.setProps({ msg: "Test" });
  //     //then we expect that the fetch call is made with the correct url
  //     expect(fetch).toHaveBeenNthCalledWith(1, "https://example.com/Test");
  //   });

  it("should call axios.get function with https://httpbin.org/get when msg property changes", async () => {
    //given the component is mounted
    const instance = shallowMount(HelloWorld);
    //when the mes property changes
    await instance.setProps({ msg: "Test" });
    //then we expect that the fetch call is made with the correct url
    expect(axios.get).toHaveBeenNthCalledWith(1, "https://httpbin.org/get");
  });
}); // end of describe
