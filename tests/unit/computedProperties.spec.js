import { mount } from "@vue/test-utils"
import Computed from "../../src/components/Computed/Computed";

describe("Computed Properties Testing", () => {
    const factory = (options) => {
        return mount(Computed, {
            propsData: {
                ...options
            }
        })
    }
    test("should see warning form",() => {
        const params = {age: 17}
        const wrapper = factory(params)
        expect(wrapper.vm.checkAge).toBeTruthy()
        const warning = wrapper.find("[data-test=\"warning\"]")
        expect(warning.text()).toEqual('Yaşınız 18\'den küçük olduğu için sistemimize kayıt işleminiz gerçekleştirilememiştir.')
    })
})
