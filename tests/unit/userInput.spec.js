import { mount } from "@vue/test-utils";
import UserInput from "../../src/components/UserInput/UserInput";


describe("Simulating user input", () => {
    const factory = () => {
        return mount(UserInput)
    }
    test("should ",async () => {
        const wrapper = factory()
        await wrapper.find("[data-username]").setValue("atakan")
        await wrapper.find("[data-password]").setValue("1234")
        await wrapper.find("form").trigger("submit.prevent")
        expect(wrapper.find(".message").text())
            .toBe("welcome, atakan.")
    })
})
