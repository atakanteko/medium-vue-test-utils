import {mount} from "@vue/test-utils";
import Personel from "../../src/components/MockingGlobal/Personel";

describe("Mocking global objects", () => {
    const factory = (options) => {
        return mount(Personel,{
            mocks: {
                $route: {...options}
            }
        })
    }
    test("mocking route global object",() => {
        const params = {
                personelId: '32'
            }
        const wrapper = factory(params)
        expect(wrapper.find('#personel').text())
            .toBe(`${params.personelId} numaralı personel`)
    })
})

