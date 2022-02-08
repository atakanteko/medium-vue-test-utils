import { mount } from "@vue/test-utils"
import MockingAxios from "../../src/components/MockingAxios/MockingAxios";
import axios from "axios";
import flushPromises from "flush-promises"

let url = ''
const ids = {id1:'1',id2:'2'}
const expectedResult =  [
    {
        "data": {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
    },
    {
        "data": {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
    }
]

jest.mock("axios",()=>({
    get: (_url) => {
        return new Promise((resolve) => {
            const responseData = [
                {
                    "data": {
                        "userId": 1,
                        "id": 1,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                        }
                },
                {
                    "data": {
                        "userId": 1,
                        "id": 2,
                        "title": "qui est esse",
                        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                        }
                }
           ]
            const _id = _url.split("/").slice(-1)
            url = _url
            if (parseInt(_id)===responseData[0].data.id){
                resolve(responseData[0])
            } else {
                resolve(responseData[1])
            }
        })
    }
}))

describe("Mocking a HTTP Client", () => {
    const factory = () => {
        return mount(MockingAxios)
    }

    test.each([[ids.id1, expectedResult[0].data.title],[ids.id2, expectedResult[1].data.title]])('Mocking Axios',
        async (firstArgs, expectedResult) => {
        const wrapper = factory()
        await wrapper.find("[data-id]").setValue(firstArgs)
        await wrapper.find("form").trigger("submit.prevent")
        await flushPromises()
        expect(url).toBe(`https://jsonplaceholder.typicode.com/posts/${firstArgs}`)
        expect(wrapper.find("[data-title]").text()).toEqual(expectedResult)
    });
})
