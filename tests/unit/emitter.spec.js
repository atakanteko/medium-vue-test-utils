import { mount } from "@vue/test-utils"
import Emitter from "../../src/components/Emitter/Emitter";

describe("Emits an event testing", () => {
    const factory = () => {
        return mount(Emitter)
    }
    test("emits and event with parameters",() => {
        const wrapper = factory()
        wrapper.vm.emitMyEvent()
        expect(wrapper.emitted().sendNameAge[0]).toEqual(["Alp", "20"])
    })
})
