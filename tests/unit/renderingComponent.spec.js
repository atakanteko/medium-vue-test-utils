import { mount,shallowMount } from "@vue/test-utils"
import Page from '../../src/components/Page'
import Book from "../../src/components/Book";

describe("Rendering Components", () => {
    test("render child component with shallow mount",() => {
        const shallowWrapper = shallowMount(Page)
        const mountWrapper = mount(Page)
        console.log(shallowWrapper.html())
        console.log(mountWrapper.html())
    })
    test("render parent component with mount",() => {
        const shallowWrapper = shallowMount(Book)
        const mountWrapper = mount(Book)
        console.log(shallowWrapper.html())
        console.log(mountWrapper.html())
    })
})
