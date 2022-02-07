import { mount,shallowMount } from "@vue/test-utils"
import LoginForm from "../../src/components/PropsData/LoginForm";


describe("Props Data Testing", () => {
    const factory = (options) => {
        return mount(LoginForm, {
            propsData: {
                ...options
            }
        })
    }
    test("should render user form",() => {
        const params = {isAdmin: false}
        const shallowWrapper = factory(params)
        expect(shallowWrapper.find("[data-test=\"user-form\"]").text())
            .toBe("User Form Design")
    })
    test("should render admin form",() => {
        const params = {isAdmin: true}
        const shallowWrapper = factory(params)
        expect(shallowWrapper.find("[data-test=\"admin-form\"]").text())
            .toBe("Admin Form Design")
    })
})
