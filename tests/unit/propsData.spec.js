import { mount,shallowMount } from "@vue/test-utils"
import LoginForm from "../../src/components/PropsData/LoginForm";


describe("Props Data Testing", () => {
    test("should render user form",() => {
        const shallowWrapper = shallowMount(LoginForm, {
            propsData: {
                isAdmin: false
            }
        })
        expect(shallowWrapper.find("[data-test=\"user-form\"]").text())
            .toBe("User Form Design")
    })
    test("should render admin form",() => {
        const shallowWrapper = shallowMount(LoginForm, {
            propsData: {
                isAdmin: true
            }
        })
        expect(shallowWrapper.find("[data-test=\"admin-form\"]").text())
            .toBe("Admin Form Design")
    })
})
